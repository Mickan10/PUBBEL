import { Link } from 'react-router-dom'
import styles from './QuizService.module.css'

const occasions = [
  { label: '18-årskalas',  color: '#FF006E', desc: 'Starta vuxenlivet med världens bästa quiz.' },
  { label: '20-årskalas',  color: '#FFD60A', desc: 'Fortfarande ung nog att inte veta allt.' },
  { label: '40-årskalas',  color: '#FF6B35', desc: 'Nu vet man åtminstone hälften av svaren.' },
  { label: 'Bröllop',      color: '#a855f7', desc: 'Testa om ni verkligen känner varandra.' },
  { label: 'Girls Night',  color: '#FF006E', desc: 'Prosecco + quiz = perfekt kväll.' },
  { label: 'Företagsevent',color: '#00CCDD', desc: 'Teambuilding som faktiskt är rolig.' },
]

export default function QuizService() {
  return (
    <main className={styles.wrapper}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <span className={styles.heroTag}>Skräddarsytt</span>
        <h1>BOKA DITT<br /><span>EGET QUIZ</span></h1>
        <p className={styles.heroLead}>
          Vi sätter ihop ett quiz anpassat precis för er kväll —
          rätt svårighetsgrad, rätt tema, rätt stämning.
          Du beställer, vi fixar. Sen är det bara att hälla upp.
        </p>
        <Link to="/kontakt" className={styles.heroBtn}>Kontakta oss</Link>
      </section>

      {/* ── OCCASIONS ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>PASSAR TILL</h2>
        <div className={styles.occasionGrid}>
          {occasions.map(({ label, color, desc }) => (
            <div key={label} className={styles.occasionCard} style={{ '--c': color } as React.CSSProperties}>
              <h3>{label}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>VAD KAN MAN BESTÄLLA?</h2>
        <div className={styles.productGrid}>

          <div className={styles.productCard}>
            <div className={styles.productHeader} style={{ background: '#FFD60A', color: '#111' }}>
              <h3>SKRÄDDARSYTT QUIZ</h3>
              <span className={styles.productPrice}>100 kr</span>
            </div>
            <div className={styles.productBody}>
              <p>
                Ett klassiskt quiz med frågor anpassade för er — personliga hälsningar,
                interna skämt och frågor som faktiskt passar gruppen.
                Perfekt som underhållning vid middagen eller som kvällens höjdpunkt.
              </p>
              <ul className={styles.featureList}>
                <li>Valfritt antal frågor och ronder</li>
                <li>Välj kategorier själv</li>
                <li>Vi kan lägga in personliga frågor om festen/paret</li>
                <li>Levereras digitalt, klart att köra</li>
              </ul>
            </div>
          </div>

          <div className={styles.productCard}>
            <div className={styles.productHeader} style={{ background: '#FF006E', color: '#fff' }}>
              <h3>SVARET ÄR!</h3>
              <span className={styles.productPrice}>300 kr</span>
            </div>
            <div className={styles.productBody}>
              <p>
                Du känner säkert till det klassiska TV-formatet där svaret ges och
                lagen måste lista ut frågan. Vi kör samma upplägg — fast med era egna
                kategorier och en quizmaster som håller koll på kaoset.
              </p>
              <ul className={styles.featureList}>
                <li>5 kategorier med 5 frågor vardera</li>
                <li>Poängsättning och dramatisk final</li>
                <li>Fungerar för 2–8 lag</li>
                <li>Vi kan leda kvällen eller leverera allt material</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <h2>LÅTER DET BRA?</h2>
        <p>Hör av dig via kontaktsidan så pratar vi datum, upplägg och pris.</p>
        <Link to="/kontakt" className={styles.ctaBtn}>Skicka en förfrågan</Link>
      </section>

    </main>
  )
}
