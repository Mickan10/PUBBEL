import { useState } from 'react'
import { Link } from 'react-router-dom'
import { JeopardyPack, categoryMeta } from '../data/questions'
import { blurActiveElement } from '../utils'
import styles from './JeopardyGame.module.css'

type Phase = 'setup' | 'board' | 'clue' | 'finished'
type Team = { name: string; score: number }

const MAX_TEAMS = 6
const DEFAULT_TEAMS = ['Lag 1', 'Lag 2']

export default function JeopardyGame({ pack, category }: { pack: JeopardyPack; category: string }) {
  const meta = categoryMeta[category]

  // ── Setup state ──
  const [teamNames, setTeamNames]   = useState<string[]>(DEFAULT_TEAMS)
  const [phase,     setPhase]       = useState<Phase>('setup')

  // ── Game state ──
  const [teams,       setTeams]       = useState<Team[]>([])
  const [used,        setUsed]        = useState<Set<string>>(new Set())
  const [activeCell,  setActiveCell]  = useState<{ catIdx: number; clueIdx: number } | null>(null)
  const [showAnswer,  setShowAnswer]  = useState(false)
  const [showHelp,    setShowHelp]    = useState(false)

  const totalCells = pack.categories.length * pack.points.length

  // ── Helpers ──
  function cellKey(catIdx: number, clueIdx: number) { return `${catIdx}-${clueIdx}` }

  function startGame() {
    const filtered = teamNames.map(n => n.trim()).filter(Boolean)
    if (filtered.length < 2) return
    setTeams(filtered.map(name => ({ name, score: 0 })))
    setUsed(new Set())
    setPhase('board')
    setShowHelp(true)
  }

  function openClue(catIdx: number, clueIdx: number) {
    if (used.has(cellKey(catIdx, clueIdx))) return
    setActiveCell({ catIdx, clueIdx })
    setShowAnswer(false)
    setPhase('clue')
  }

  function awardPoints(teamIdx: number) {
    if (!activeCell) return
    const points = pack.points[activeCell.clueIdx]
    setTeams(prev => prev.map((t, i) => i === teamIdx ? { ...t, score: t.score + points } : t))
    closeClue()
  }

  function closeClue() {
    if (!activeCell) return
    blurActiveElement()
    setUsed(prev => new Set(prev).add(cellKey(activeCell.catIdx, activeCell.clueIdx)))
    setActiveCell(null)
    setShowAnswer(false)
    const newUsed = used.size + 1
    if (newUsed >= totalCells) setPhase('finished')
    else setPhase('board')
  }

  function dismissHelp() {
    setShowHelp(false)
  }

  function addTeam() {
    if (teamNames.length < MAX_TEAMS) setTeamNames(prev => [...prev, `Lag ${prev.length + 1}`])
  }
  function removeTeam(i: number) {
    if (teamNames.length > 2) setTeamNames(prev => prev.filter((_, idx) => idx !== i))
  }
  function updateTeamName(i: number, val: string) {
    setTeamNames(prev => prev.map((n, idx) => idx === i ? val : n))
  }

  const winner = [...teams].sort((a, b) => b.score - a.score)[0]

  // ════════════════════════════════════════════════
  // RENDER
  // ════════════════════════════════════════════════

  if (phase === 'setup') return (
    <main className={styles.wrapper}
      style={{ '--accent': meta.color, '--accent-text': meta.textColor, '--surface': meta.bg ?? meta.color, background: meta.bg ?? meta.color } as React.CSSProperties}>
      <div className={styles.setupCard}>
        <span className={styles.badge} style={{ background: 'rgba(0,0,0,0.3)', color: meta.textColor }}>
          {meta.label} — Svaret är!
        </span>
        <h1 className={styles.setupTitle}>{pack.title}</h1>
        <p className={styles.setupDesc}>{pack.desc}</p>

        <div className={styles.teamSection}>
          <p className={styles.teamLabel}>LAG ({teamNames.length}/{MAX_TEAMS})</p>
          {teamNames.map((name, i) => (
            <div key={i} className={styles.teamRow}>
              <input
                className={styles.teamInput}
                value={name}
                onChange={e => updateTeamName(i, e.target.value)}
                placeholder={`Lag ${i + 1}`}
                maxLength={20}
              />
              {teamNames.length > 2 && (
                <button className={styles.removeBtn} onClick={() => removeTeam(i)}>✕</button>
              )}
            </div>
          ))}
          {teamNames.length < MAX_TEAMS && (
            <button className={styles.addTeamBtn} onClick={addTeam}>+ Lägg till lag</button>
          )}
        </div>

        <button className={styles.btnStart}
          style={{ background: meta.textColor, color: meta.bg ?? meta.color }}
          onClick={startGame}>
          Starta spelet →
        </button>
        <Link to={`/quiz/${category}`} className={styles.btnBack}>← Tillbaka</Link>
      </div>
    </main>
  )

  if (phase === 'board' || phase === 'clue') return (
    <main className={styles.wrapper}
      style={{ '--accent': meta.color, '--accent-text': meta.textColor, '--surface': meta.bg ?? meta.color, background: meta.bg ?? meta.color } as React.CSSProperties}>

      {/* ── BOARD AREA (score + grid) ── */}
      <div className={styles.boardArea}>
        {/* ── SCORE BAR ── */}
        <div className={styles.scoreBar}>
          {teams.map((t, i) => (
            <div key={i} className={styles.scoreTeam}>
              <span className={styles.scoreName}>{t.name}</span>
              <span className={styles.scorePoints} style={{ color: meta.textColor }}>{t.score}</span>
            </div>
          ))}
          <div className={styles.scoreRemaining}>
            {totalCells - used.size} kvar
          </div>
        </div>

        {/* ── BOARD ── */}
        <div className={styles.board}
          style={{
            gridTemplateColumns: `repeat(${pack.categories.length}, 1fr)`,
            gridTemplateRows: `auto repeat(${pack.points.length}, 1fr)`,
          }}>
          {pack.categories.map((cat, catIdx) => (
            <div key={catIdx} className={styles.categoryHeader}>{cat.name}</div>
          ))}
          {pack.points.map((points, clueIdx) =>
            pack.categories.map((_, catIdx) => {
              const key = cellKey(catIdx, clueIdx)
              const isUsed = used.has(key)
              return (
                <button
                  key={key}
                  className={`${styles.cell} ${isUsed ? styles.cellUsed : ''}`}
                  onClick={() => openClue(catIdx, clueIdx)}
                  disabled={isUsed}
                >
                  {isUsed ? '—' : points}
                </button>
              )
            })
          )}
        </div>
      </div>

      {/* ── HELP POPUP ── */}
      {showHelp && phase === 'board' && (
        <div className={styles.helpOverlay} onClick={dismissHelp}>
          <div className={styles.helpCard} onClick={e => e.stopPropagation()}>
            <button className={styles.helpClose} onClick={dismissHelp}>✕</button>
            <h2 className={styles.helpTitle}>Så funkar det</h2>
            <ol className={styles.helpList}>
              <li>Klicka på en ruta med poäng för att öppna en fråga.</li>
              <li>Klicka på <strong>"Visa rätt fråga"</strong> för att se svaret.</li>
              <li>Välj vilket lag som svarade rätt — eller "Ingen fick det" om inget lag svarade rätt.</li>
            </ol>
            <button className={styles.helpStart}
              style={{ background: meta.textColor, color: meta.bg ?? meta.color }}
              onClick={dismissHelp}>
              Nu kör vi!
            </button>
          </div>
        </div>
      )}

      {/* ── CLUE OVERLAY ── */}
      {phase === 'clue' && activeCell && (
        <div className={styles.overlay}>
          <div className={styles.clueCard}>
            <div className={styles.clueHeader}>
              <span className={styles.clueCategory}>
                {pack.categories[activeCell.catIdx].name}
              </span>
              <span className={styles.cluePoints} style={{ color: meta.textColor }}>
                {pack.points[activeCell.clueIdx]} p
              </span>
            </div>

            <p className={styles.clueText}>
              {pack.categories[activeCell.catIdx].clues[activeCell.clueIdx].answer}
            </p>

            {showAnswer && (
              <p className={styles.correctAnswer}>
                ✓ {pack.categories[activeCell.catIdx].clues[activeCell.clueIdx].question}
              </p>
            )}

            {!showAnswer && (
              <button className={styles.revealBtn}
                style={{ borderColor: meta.textColor, color: meta.textColor }}
                onClick={() => setShowAnswer(true)}>
                Visa rätt fråga
              </button>
            )}

            <div className={styles.clueActions}>
              <p className={styles.clueActionsLabel}>VILKET LAG SVARADE RÄTT?</p>
              <div className={styles.teamButtons}>
                {teams.map((t, i) => (
                  <button key={i} className={styles.teamBtn}
                    style={{ '--tc': meta.color } as React.CSSProperties}
                    onClick={() => awardPoints(i)}>
                    {t.name}
                  </button>
                ))}
              </div>
              <button className={styles.nobodyBtn} onClick={closeClue}>
                Ingen fick det — nästa
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )

  // ── FINISHED ──
  const sorted = [...teams].sort((a, b) => b.score - a.score)
  const loser = sorted[sorted.length - 1]
  const funnyLines = [
    `${loser.name} bjuder laget på en runda. Det är bara rimligt.`,
    `${loser.name} diskar efter festen. Inga diskussioner.`,
    `${loser.name} hämtar nästa beställning. Tack på förhand.`,
    `Grattis ${winner.name}! ${loser.name} tar hand om notan.`,
    `${loser.name} sjunger en sång valfritt — vinnarna väljer låt.`,
    `${loser.name} berättar ett skämt. Det måste vara dåligt.`,
    `${loser.name} gör en pushup per förlorad poäng. Lycka till.`,
    `${winner.name} väljer nästa ställe. ${loser.name} betalar taxin.`,
  ]
  const funnyLine = funnyLines[Math.floor(Math.random() * funnyLines.length)]

  return (
    <main className={styles.wrapper}
      style={{ '--accent': meta.color, '--accent-text': meta.textColor, '--surface': meta.bg ?? meta.color, background: meta.bg ?? meta.color } as React.CSSProperties}>
      <div className={styles.setupCard}>
        <h1 className={styles.setupTitle}>SPELET SLUT!</h1>
        <p className={styles.winnerLine}>
          Vinnare: <span style={{ color: meta.textColor }}>{winner.name}</span> med {winner.score} poäng
        </p>
        <p className={styles.funnyLine}>{funnyLine}</p>
        <div className={styles.finalScores}>
          {sorted.map((t, i) => (
            <div key={i} className={`${styles.finalRow} ${i === 0 ? styles.finalRowWinner : ''}`}>
              <span className={styles.finalRank}>{i + 1}.</span>
              <span className={styles.finalName}>{t.name}</span>
              <span className={styles.finalScore} style={i === 0 ? { color: meta.textColor } : undefined}>
                {t.score} p
              </span>
            </div>
          ))}
        </div>
        <button className={styles.btnStart}
          style={{ background: meta.textColor, color: meta.bg ?? meta.color }}
          onClick={() => { setTeams([]); setUsed(new Set()); setPhase('setup') }}>
          Spela igen
        </button>
        <Link to={`/quiz/${category}`} className={styles.btnBack}>← Välj annat quiz</Link>
      </div>
    </main>
  )
}
