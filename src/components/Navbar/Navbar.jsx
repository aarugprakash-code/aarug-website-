import "./Navbar.css";
import { useState } from "react";
import logo from "../../assets/logo.png";
import {Link} from 'react-router-dom';

export default function Navbar({ onWorkshopClick, onPartnerClick }) {
  const [open, setOpen] = useState(false);

  const handleWorkshop = () => {
    setOpen(false);          // close mobile menu
    onWorkshopClick();      // open modal
  };

  const handlePartner = () => {
    setOpen(false);
    onPartnerClick();
  };

  return (
    <nav className="navbar navbar-show">
      <img src={logo} alt="Aarug Logo" className="logo" />

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <div className={`nav-links ${open ? "open" : ""}`}>

        <Link to="/" onClick={() => setOpen(false)}>
          Home
        </Link>

        <Link to="/about" onClick={() => setOpen(false)}>
          About
        </Link>

        <a href="#offerings" onClick={() => setOpen(false)}>Programs</a>

        <button
          className="nav-cta"
          onClick={handleWorkshop}
        >
          Request a School / Organization Workshop
        </button>
      </div>
    </nav>
  );
}
