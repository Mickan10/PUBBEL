import { useState, FormEvent } from 'react'
import styles from './Kontakt.module.css'

export default function Kontakt() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.info}>
          <h1>KON<span>TAKT</span></h1>
          <p>Har du frågor, idéer eller vill samarbeta? Vi hör gärna från dig!</p>
          <ul className={styles.contactList}>
            <li>hej@pubbel.se</li>
            <li>Skövde, Sverige</li>
          </ul>
        </div>

        <div className={styles.formWrap}>
          {sent ? (
            <div className={styles.thankYou}>
              <h2>TACK!</h2>
              <p>Vi återkommer så snart vi kan.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <label>
                Namn
                <input type="text" placeholder="Ditt namn" required />
              </label>
              <label>
                E-post
                <input type="email" placeholder="din@email.se" required />
              </label>
              <label>
                Meddelande
                <textarea rows={5} placeholder="Skriv ditt meddelande..." required />
              </label>
              <button type="submit" className={styles.btnPrimary}>
                Skicka Meddelande
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
