import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { QuizPack, categoryMeta } from '../data/questions'
import styles from './Quiz.module.css'

type Phase = 'intro' | 'question' | 'answer' | 'finished'
const LETTERS = ['A', 'B', 'C', 'D'] as const

function scoreLabel(pct: number): string {
  if (pct === 100) return 'Perfekt!'
  if (pct >= 80)   return 'Riktigt bra!'
  if (pct >= 60)   return 'Inte illa!'
  if (pct >= 40)   return 'Halvvägs!'
  return 'Nästa gång!'
}

export default function QuizGame({ pack, category }: { pack: QuizPack; category: string }) {
  const meta = categoryMeta[category]
  const qs = pack.questions

  const [phase,    setPhase]    = useState<Phase>('intro')
  const [current,  setCurrent]  = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score,    setScore]    = useState(0)

  const pickAnswer = useCallback((i: number) => {
    if (phase !== 'question') return
    ;(document.activeElement as HTMLElement)?.blur()
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
    setCurrent(0); setSelected(null); setScore(0); setPhase('intro')
  }

  const q   = qs[current]
  const pct = Math.round((score / qs.length) * 100)
  const progressPct = phase === 'finished' ? 100 : Math.round((current / qs.length) * 100)

  return (
    <main
      className={styles.wrapper}
      style={{ '--accent': meta.color, '--accent-text': meta.textColor } as React.CSSProperties}
    >
      {phase !== 'intro' && (
        <div className={styles.progressTrack}>
          <div className={styles.progressFill} style={{ width: `${progressPct}%` }} />
        </div>
      )}

      {/* INTRO */}
      {phase === 'intro' && (
        <div className={styles.card}>
          <span className={styles.badge} style={{ background: meta.color, color: meta.textColor }}>
            {meta.label}
          </span>
          <h1 className={styles.introTitle}>{pack.title.toUpperCase()}</h1>
          <p className={styles.introSub}>{pack.desc}</p>
          <button className={styles.btnStart} style={{ background: meta.color, color: meta.textColor }}
            onClick={() => setPhase('question')}>
            Starta →
          </button>
          <Link to={`/quiz/${category}`} className={styles.btnBack}>← Tillbaka</Link>
        </div>
      )}

      {/* QUESTION / ANSWER */}
      {(phase === 'question' || phase === 'answer') && (
        <div className={styles.card}>
          <div className={styles.questionMeta}>
            <span className={styles.badge} style={{ background: meta.color, color: meta.textColor }}>
              {meta.label}
            </span>
            <span className={styles.counter}>{current + 1} / {qs.length}</span>
          </div>
          <p className={styles.questionText}>{q.q}</p>
          <div className={styles.options}>
            {q.options.map((opt, i) => {
              let mod = ''
              if (phase === 'answer') {
                if (i === q.answer) mod = styles.correct
                else if (i === selected) mod = styles.wrong
              }
              return (
                <button key={i} className={`${styles.option} ${mod}`}
                  onClick={() => pickAnswer(i)} disabled={phase === 'answer'}>
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

      {/* FINISHED */}
      {phase === 'finished' && (
        <div className={styles.card}>
          <h2 className={styles.resultTitle}>{scoreLabel(pct)}</h2>
          <p className={styles.resultScore}>
            <span style={{ color: meta.color }}>{score}</span> av {qs.length} rätt
          </p>
          <div className={styles.scoreBar}>
            <div className={styles.scoreBarFill} style={{ width: `${pct}%`, background: meta.color }} />
          </div>
          <p className={styles.scorePct}>{pct}%</p>
          <div className={styles.resultActions}>
            <button className={styles.btnStart} style={{ background: meta.color, color: meta.textColor }}
              onClick={restart}>Spela igen</button>
            <Link to={`/quiz/${category}`} className={styles.btnBack}>← Välj annat quiz</Link>
          </div>
        </div>
      )}
    </main>
  )
}
