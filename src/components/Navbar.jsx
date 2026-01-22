import { useState } from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <img src={logo} alt="Aarug Logo" className="logo" />

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/school-workshops">School Workshops</a>
        <a href="/partnerships">Partnerships</a>
        <a href="/about">About</a>

        <a href="/school-workshops" className="nav-cta">
          Request a School Workshop
        </a>
      </div>
    </nav>

  )
}
