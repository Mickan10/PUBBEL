import { Link, useParams } from 'react-router-dom'
import { packs, categoryMeta } from '../data/questions'
import styles from './CategorySelect.module.css'

export default function CategorySelect() {
  const { category = '' } = useParams<{ category: string }>()
  const meta = categoryMeta[category]
  const categoryPacks = packs[category] ?? []

  if (!meta || categoryPacks.length === 0) {
    return (
      <main className={styles.wrapper}>
        <div className={styles.notFound}>
          <h1>Kategori saknas</h1>
          <Link to="/" className={styles.back}>← Tillbaka</Link>
        </div>
      </main>
    )
  }

  return (
    <main
      className={styles.wrapper}
      style={{ '--accent': meta.color, '--accent-text': meta.textColor, background: meta.color } as React.CSSProperties}
    >
      <header
        className={styles.hero}
        style={{ '--accent': meta.color, '--accent-text': meta.textColor } as React.CSSProperties}
      >
        <Link to="/" className={styles.back}>← Tillbaka</Link>
        <h1 className={styles.heroTitle}>{meta.label.toUpperCase()}</h1>
        <p className={styles.heroSub}>Välj ett quiz att spela</p>
      </header>

      <div className={styles.packList}>
        {categoryPacks.map(pack => (
          <Link
            key={pack.id}
            to={`/quiz/${category}/${pack.id}`}
            className={styles.packCard}
            style={{ '--accent': meta.color } as React.CSSProperties}
          >
            <div className={styles.packTop}>
              <span
                className={styles.typeBadge}
                style={
                  pack.type === 'jeopardy'
                    ? { background: meta.color, color: meta.textColor }
                    : undefined
                }
              >
                {pack.type === 'quiz' ? 'QUIZ' : 'SVARET ÄR!'}
              </span>
              <span className={styles.packArrow}>→</span>
            </div>
            <h2 className={styles.packTitle}>{pack.title}</h2>
            <p className={styles.packDesc}>{pack.desc}</p>
            <p className={styles.packMeta}>
              {pack.type === 'quiz'
                ? `${pack.questions.length} frågor`
                : `${pack.categories.length} kategorier · ${pack.points.join(' / ')} poäng`}
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}
