import { useState } from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <img src={logo} alt="Aarug Logo" className="logo" />

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        ☰
      </button>

      <div className={`nav-links ${open ? 'open' : ''}`}>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#offerings" onClick={() => setOpen(false)}>Programs</a>
        <a
          href="https://wa.me/919111361052?text=Hello%20I%20want%20to%20book%20a%20menstrual%20health%20workshop%20for%20my%20institution"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
          onClick={() => setOpen(false)}
        >
          Book Workshop
        </a>
      </div>
    </nav>
  )
}
