import { useEffect, useState, useRef } from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY.current) {
        // scrolling up
        setVisible(true)
      } else if (currentScrollY > lastScrollY.current) {
        // scrolling down
        setVisible(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${visible ? 'navbar-show' : 'navbar-hide'}`}>
      <img src={logo} alt="Aarug Logo" className="logo" />

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#offerings">Programs</a>
        <a
          href="https://wa.me/919111361052?text=Hello%20I%20want%20to%20book%20a%20workshop"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Book Workshop
        </a>
      </div>
    </nav>
  )
}
