import { useParams, Link } from 'react-router-dom'
import { packs } from '../data/questions'
import QuizGame from './QuizGame'
import JeopardyGame from './JeopardyGame'

export default function GameLauncher() {
  const { category = '', packId = '' } = useParams<{ category: string; packId: string }>()
  const categoryPacks = packs[category] ?? []
  const pack = categoryPacks.find(p => p.id === packId)

  if (!pack) {
    return (
      <main style={{ minHeight: 'calc(100vh - 64px)', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
        <p style={{ fontFamily: 'Anton, sans-serif', color: '#fff', fontSize: '2rem' }}>Quiz saknas</p>
        <Link to="/" style={{ fontFamily: 'Anton, sans-serif', color: '#FFD60A', fontSize: '0.9rem', letterSpacing: '0.1em' }}>← TILLBAKA</Link>
      </main>
    )
  }

  if (pack.type === 'quiz') return <QuizGame pack={pack} category={category} />
  return <JeopardyGame pack={pack} category={category} />
}
