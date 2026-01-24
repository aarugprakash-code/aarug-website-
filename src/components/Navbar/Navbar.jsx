import "./Navbar.css";
import { useState } from "react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
        <a href="#about">About</a>
        <a href="#offerings">Programs</a>
        <a href="#partnerships">Partner With Aarug</a>
        <a href="#school-workshops" className="nav-cta">
          Request a School / Organization Workshop
        </a>
      </div>
    </nav>
  );
}
