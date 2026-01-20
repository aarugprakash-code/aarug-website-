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
          href="https://wa.me/919111361052"
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
