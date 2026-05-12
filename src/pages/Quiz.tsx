import { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import { questions, categoryMeta } from '../data/questions'
import styles from './Quiz.module.css'

type Phase = 'intro' | 'question' | 'answer' | 'finished'

const LETTERS = ['A', 'B', 'C', 'D'] as const

function scoreLabel(pct: number): { text: string; emoji: string } {
  if (pct === 100) return { text: 'Perfekt!', emoji: '🏆' }
  if (pct >= 80)  return { text: 'Riktigt bra!', emoji: '🎉' }
  if (pct >= 60)  return { text: 'Inte illa!', emoji: '👏' }
  if (pct >= 40)  return { text: 'Halvvägs!', emoji: '🤔' }
  return { text: 'Nästa gång!', emoji: '💪' }
}

export default function Quiz() {
  const { category = '' } = useParams<{ category: string }>()
  const meta = categoryMeta[category]
  const qs   = questions[category] ?? []

  const [phase,    setPhase]    = useState<Phase>('intro')
  const [current,  setCurrent]  = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score,    setScore]    = useState(0)

  // reset when category changes
  useEffect(() => {
    setPhase('intro')
    setCurrent(0)
    setSelected(null)
    setScore(0)
  }, [category])

  const pickAnswer = useCallback((i: number) => {
    if (phase !== 'question') return
    setSelected(i)
    if (i === qs[current].answer) setScore(s => s + 1)
    setPhase('answer')

    setTimeout(() => {
      if (current + 1 < qs.length) {
        setCurrent(c => c + 1)
        setSelected(null)
        setPhase('question')
      } else {
        setPhase('finished')
      }
    }, 1500)
  }, [phase, current, qs])

  function restart() {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setPhase('intro')
  }

  if (!meta || qs.length === 0) {
    return (
      <main className={styles.wrapper}>
        <div className={styles.notFound}>
          <span>😵</span>
          <h1>Kategori saknas</h1>
          <Link to="/" className={styles.btnBack}>← Tillbaka</Link>
        </div>
      </main>
    )
  }

  const q          = qs[current]
  const pct        = Math.round((score / qs.length) * 100)
  const { text: scoreText, emoji: scoreEmoji } = scoreLabel(pct)
  const progressPct = phase === 'finished'
    ? 100
    : Math.round((current / qs.length) * 100)

  return (
    <main
      className={styles.wrapper}
      style={{ '--accent': meta.color, '--accent-text': meta.textColor } as React.CSSProperties}
    >
      {/* ── PROGRESS BAR ── */}
      {phase !== 'intro' && (
        <div className={styles.progressTrack}>
          <div className={styles.progressFill} style={{ width: `${progressPct}%` }} />
        </div>
      )}

      {/* ══════════ INTRO ══════════ */}
      {phase === 'intro' && (
        <div className={styles.card}>
          <div className={styles.introEmoji}>{meta.emoji}</div>
          <span className={styles.badge} style={{ background: meta.color, color: meta.textColor }}>
            {meta.label}
          </span>
          <h1 className={styles.introTitle}>{meta.label.toUpperCase()}</h1>
          <p className={styles.introSub}>{qs.length} frågor · Välj rätt svar</p>
          <button
            className={styles.btnStart}
            style={{ background: meta.color, color: meta.textColor }}
            onClick={() => setPhase('question')}
          >
            Starta quizet →
          </button>
          <Link to="/" className={styles.btnBack}>← Välj annat ämne</Link>
        </div>
      )}

      {/* ══════════ QUESTION / ANSWER ══════════ */}
      {(phase === 'question' || phase === 'answer') && (
        <div className={styles.card}>
          <div className={styles.questionMeta}>
            <span className={styles.badge} style={{ background: meta.color, color: meta.textColor }}>
              {meta.emoji} {meta.label}
            </span>
            <span className={styles.counter}>{current + 1} / {qs.length}</span>
          </div>

          <p className={styles.questionText}>{q.q}</p>

          <div className={styles.options}>
            {q.options.map((opt, i) => {
              let mod = ''
              if (phase === 'answer') {
                if (i === q.answer)  mod = styles.correct
                else if (i === selected) mod = styles.wrong
              }
              return (
                <button
                  key={i}
                  className={`${styles.option} ${mod}`}
                  onClick={() => pickAnswer(i)}
                  disabled={phase === 'answer'}
                >
                  <span className={styles.optionLetter}>{LETTERS[i]}</span>
                  <span className={styles.optionText}>{opt}</span>
                </button>
              )
            })}
          </div>

          {phase === 'answer' && (
            <div className={`${styles.feedback} ${selected === q.answer ? styles.feedbackRight : styles.feedbackWrong}`}>
              {selected === q.answer ? '✓ Rätt!' : `✗ Fel — rätt svar: ${q.options[q.answer]}`}
            </div>
          )}
        </div>
      )}

      {/* ══════════ FINISHED ══════════ */}
      {phase === 'finished' && (
        <div className={styles.card}>
          <div className={styles.resultEmoji}>{scoreEmoji}</div>
          <h2 className={styles.resultTitle}>{scoreText}</h2>
          <p className={styles.resultScore}>
            <span style={{ color: meta.color }}>{score}</span> av {qs.length} rätt
          </p>

          <div className={styles.scoreBar}>
            <div
              className={styles.scoreBarFill}
              style={{ width: `${pct}%`, background: meta.color }}
            />
          </div>
          <p className={styles.scorePct}>{pct}%</p>

          <div className={styles.resultActions}>
            <button
              className={styles.btnStart}
              style={{ background: meta.color, color: meta.textColor }}
              onClick={restart}
            >
              Spela igen
            </button>
            <Link to="/" className={styles.btnBack}>← Välj ämne</Link>
          </div>
        </div>
      )}
    </main>
  )
}
