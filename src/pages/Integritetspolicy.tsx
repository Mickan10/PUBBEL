import { Link } from 'react-router-dom'
import styles from './Integritetspolicy.module.css'

export default function Integritetspolicy() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.inner}>
        <h1>INTEGRITETS<span>POLICY</span></h1>
        <p className={styles.updated}>Senast uppdaterad: 11 augusti 2026</p>

        <section>
          <h2>Vem är ansvarig</h2>
          <p>
            Pubbel drivs som en liten enskild verksamhet. Har du frågor om dina
            uppgifter når du oss på <a href="mailto:hej@pubbel.se">hej@pubbel.se</a>.
          </p>
        </section>

        <section>
          <h2>Spelet i sig</h2>
          <p>
            Lagnamn, poäng och vilka frågor ni spelat sparas bara lokalt i din
            egen webbläsare (så kallad <em>localStorage</em>) för att spelet ska
            fungera. Den informationen skickas aldrig till oss eller till någon
            server — den försvinner om du rensar webbläsarens data.
          </p>
        </section>

        <section>
          <h2>Kontaktformuläret</h2>
          <p>
            Om du hör av dig via kontaktformuläret sparar vi det namn, den
            e-postadress och det meddelande du skriver in, enbart för att kunna
            svara dig. Vi säljer eller delar aldrig uppgifterna med tredje part.
            Uppgifterna raderas när ditt ärende är avslutat, om vi inte behöver
            spara dem längre av juridiska skäl.
          </p>
        </section>

        <section>
          <h2>Kakor och analys</h2>
          <p>
            Just nu använder Pubbel inga spårnings- eller analyskakor. Ändrar vi
            det i framtiden uppdaterar vi den här sidan och ber om ditt
            samtycke där det krävs.
          </p>
        </section>

        <section>
          <h2>Dina rättigheter</h2>
          <p>
            Du har rätt att begära ut, rätta eller radera uppgifter vi sparat om
            dig, samt att invända mot behandlingen. Maila oss på{' '}
            <a href="mailto:hej@pubbel.se">hej@pubbel.se</a> så hjälper vi dig.
            Du har också rätt att klaga hos Integritetsskyddsmyndigheten (IMY).
          </p>
        </section>

        <Link to="/kontakt" className={styles.back}>← Tillbaka till Kontakt</Link>
      </div>
    </main>
  )
}
