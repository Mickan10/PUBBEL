import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import pubbelLogo from '../assets/PUBBEL.png'

const links = [
  { to: '/',        label: 'Start'   },
  { to: '/eget',    label: 'Eget'    },
  { to: '/om-oss',  label: 'Om Oss'  },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.logo}>
        <img src={pubbelLogo} alt="Pubbel" className={styles.logoImg} />
      </NavLink>

      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        className={`${styles.hamburger} ${open ? styles.openBtn : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Meny"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
