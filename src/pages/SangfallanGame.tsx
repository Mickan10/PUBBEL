import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SongPack, categoryMeta } from '../data/questions'
import styles from './SangfallanGame.module.css'

type Phase = 'setup' | 'round' | 'finished'
type Team = { name: string; score: number }

const MAX_TEAMS = 6
const DEFAULT_TEAMS = ['Lag 1', 'Lag 2']
const BASE_POINTS = 500
const STEP = 100
const MIN_POINTS = 100
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export default function SangfallanGame({ pack, category }: { pack: SongPack; category: string }) {
  const meta = categoryMeta[category]

  // ── Setup state ──
  const [teamNames, setTeamNames] = useState<string[]>(DEFAULT_TEAMS)
  const [phase,     setPhase]     = useState<Phase>('setup')

  // ── Game state ──
  const [teams,    setTeams]    = useState<Team[]>([])
  const [songIdx,  setSongIdx]  = useState(0)
  const [opened,   setOpened]   = useState<number[]>([])
  const [gaveUp,   setGaveUp]   = useState(false)
  const [showHelp, setShowHelp] = useState(false)

  const song  = pack.songs[songIdx]
  const words = song.line.split(' ')
  const pointValue = Math.max(MIN_POINTS, BASE_POINTS - opened.length * STEP)

  function startGame() {
    const filtered = teamNames.map(n => n.trim()).filter(Boolean)
    if (filtered.length < 2) return
    setTeams(filtered.map(name => ({ name, score: 0 })))
    setSongIdx(0)
    setOpened([])
    setGaveUp(false)
    setPhase('round')
    setShowHelp(true)
  }

  function dismissHelp() { setShowHelp(false) }

  function openBox(i: number) {
    if (opened.includes(i)) { setGaveUp(true); return }
    setOpened(prev => [...prev, i])
  }

  function giveUp() { setGaveUp(true) }

  function nextSong() {
    const next = songIdx + 1
    if (next >= pack.songs.length) {
      setPhase('finished')
    } else {
      setSongIdx(next)
      setOpened([])
      setGaveUp(false)
    }
  }

  function awardPoints(teamIdx: number) {
    setTeams(prev => prev.map((t, i) => i === teamIdx ? { ...t, score: t.score + pointValue } : t))
    nextSong()
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
          {meta.label} — Sångfällan
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

  if (phase === 'round') return (
    <main className={styles.wrapper}
      style={{ '--accent': meta.color, '--accent-text': meta.textColor, '--surface': meta.bg ?? meta.color, background: meta.bg ?? meta.color } as React.CSSProperties}>

      {/* ── SCORE BAR ── */}
      <div className={styles.scoreBar}>
        {teams.map((t, i) => (
          <div key={i} className={styles.scoreTeam}>
            <span className={styles.scoreName}>{t.name}</span>
            <span className={styles.scorePoints} style={{ color: meta.textColor }}>{t.score}</span>
          </div>
        ))}
        <div className={styles.scoreRemaining}>
          {songIdx + 1} / {pack.songs.length}
        </div>
      </div>

      {/* ── ROUND CARD ── */}
      <div className={styles.roundCard}>
        <p className={styles.pointValue} style={{ color: meta.textColor }}>{gaveUp ? 0 : pointValue} p</p>

        <div className={styles.boxRow}>
          {words.map((word, i) => {
            const isOpen = opened.includes(i) || gaveUp
            return (
              <button
                key={i}
                className={`${styles.box} ${isOpen ? styles.boxOpen : ''}`}
                style={isOpen ? { borderColor: meta.textColor } : undefined}
                onClick={() => openBox(i)}
                disabled={gaveUp}
              >
                <span className={styles.boxLetter} style={isOpen ? { color: meta.textColor } : undefined}>
                  {isOpen ? word : LETTERS[i % LETTERS.length]}
                </span>
              </button>
            )
          })}
        </div>

        {gaveUp && (
          <p className={styles.songReveal}>
            {song.song} — {song.artist}
          </p>
        )}

        {!gaveUp && (
          <button className={styles.revealBtn}
            style={{ borderColor: meta.textColor, color: meta.textColor }}
            onClick={giveUp}>
            Ge upp — visa låten
          </button>
        )}

        <div className={styles.roundActions}>
          <p className={styles.roundActionsLabel}>VILKET LAG GISSADE RÄTT?</p>
          <div className={styles.teamButtons}>
            {teams.map((t, i) => (
              <button key={i} className={styles.teamBtn}
                style={{ '--tc': meta.color } as React.CSSProperties}
                onClick={() => awardPoints(i)}
                disabled={gaveUp}>
                {t.name}
              </button>
            ))}
          </div>
          <button className={styles.nobodyBtn} onClick={nextSong}>
            Ingen fick det — nästa
          </button>
        </div>
      </div>

      {/* ── HELP POPUP ── */}
      {showHelp && (
        <div className={styles.helpOverlay} onClick={dismissHelp}>
          <div className={styles.helpCard} onClick={e => e.stopPropagation()}>
            <button className={styles.helpClose} onClick={dismissHelp}>✕</button>
            <h2 className={styles.helpTitle}>Så funkar det</h2>
            <ol className={styles.helpList}>
              <li>En rad ur en låt döljs bakom rutor, ett ord i taget — sjung eller säg vilken låt det är!</li>
              <li>Klicka på en ruta för att avslöja det ordet — men färre öppnade rutor ger fler poäng.</li>
              <li>Klicka på en redan öppnad ruta igen för att ge upp och visa rätt låt direkt.</li>
              <li>Gissa vilken låt det är — välj vilket lag som gissade rätt, eller "Ingen fick det".</li>
              <li>Är det ett lags tur får inget annat lag svara, även om de vet svaret — vänta på er tur!</li>
            </ol>
            <button className={styles.helpStart}
              style={{ background: meta.textColor, color: meta.bg ?? meta.color }}
              onClick={dismissHelp}>
              Nu kör vi!
            </button>
          </div>
        </div>
      )}
    </main>
  )

  // ── FINISHED ──
  const sorted = [...teams].sort((a, b) => b.score - a.score)
  const loser = sorted[sorted.length - 1]
  const funnyLines = [
    `${loser.name} sjunger nästa låt helt själv, utan mic.`,
    `${loser.name} får blunda och gissa nästa artist.`,
    `${winner.name} väljer nästa spellista för kvällen.`,
    `${loser.name} håller takten. Eller försöker.`,
    `${loser.name} bjuder laget på en runda. Det är bara rimligt.`,
    `${loser.name} dansar en runda — helt utan musik.`,
    `${loser.name} får sjunga refrängen en gång till. Live.`,
    `Grattis ${winner.name}! Kvällens riktiga popstjärnor.`,
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
          onClick={() => { setTeams([]); setSongIdx(0); setOpened([]); setGaveUp(false); setPhase('setup') }}>
          Spela igen
        </button>
        <Link to={`/quiz/${category}`} className={styles.btnBack}>← Välj annat quiz</Link>
      </div>
    </main>
  )
}
