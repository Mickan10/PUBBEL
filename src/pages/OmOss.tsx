import styles from './OmOss.module.css'

export default function OmOss() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <h1>OM <span>OSS</span></h1>
        <p className={styles.lead}>
          En app gjord av kärlek, desperation och alldeles för mycket ledig tid.
        </p>
        <div className={styles.heroDots} aria-hidden />
      </section>

      <section className={styles.content}>

        <div className={styles.textBlock}>
          <h2>HISTORIEN OM PUBBEL</h2>
          <p>
            Det hela börjar i Schlätta — ett litet samhälle strax utanför Skövde som
            du förmodligen aldrig hört talas om, och det är helt okej. Där växte
            <strong> Mickan</strong> upp, drömde stora drömmar om att bli en
            programmerare och drog sedan iväg ut i världen med laptop och höga ambitioner.
          </p>
          <p>
            Spoiler: IT-branschen ville inte riktigt ha Mickan. Ansökan efter ansökan.
            Intervju efter intervju. CV skickat in i ett digitalt svart hål som kallas
            "Vi återkommer". De återkom aldrig.
          </p>
          <p>
            Men vad gör man när man kan programmera men inget företag tycks notera det?
            Man bygger något eget, förstås. Och helst något man faktiskt <em>behöver</em>.
          </p>
        </div>

<div className={styles.values}>
          {[
            {
              title: 'KODAD I SKÖVDE',
              text: 'En kopp kaffe och en laptop. Inte mer än så.',
            },
            {
              title: 'FÖR PUBEN',
              text: 'Designad för att funka på en liten telefonskärm i dålig belysning med halvfull öl.',
            },
            {
              title: 'ÄRLIGA FRÅGOR',
              text: 'Inga obskyra fångstfrågor. Lagom svårt, faktiskt roligt — precis som quiz ska vara.',
            },
          ].map(({ title, text }) => (
            <div key={title} className={styles.valueCard}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className={styles.closing}>
          <p>
            Så om du spelar Pubbel ikväll: hälsa från Mickan i Schlätta.
            Karriären kanske inte lyfte, men quizet funkar.
          </p>
        </div>

      </section>
    </main>
  )
}
