import { useState } from "react";
import { images } from "../config/assets";
import "../css/Navbar.css";

const Navbar = () => {
  // State to remember if the menu is open or closed on mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <a href="#home" className="logo-link">
        <img src={images.logo} alt="Logo" className="nav-logo-img" />
        <div className="logo-text">পরশমণি</div>
      </a>

      <button
        type="button"
        className="menu-icon"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="menu-line"></span>
        <span className="menu-line"></span>
        <span className="menu-line"></span>
      </button>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#doctor" onClick={() => setIsMenuOpen(false)}>
            Doctors
          </a>
        </li>
        <li>
          <a href="#patient" onClick={() => setIsMenuOpen(false)}>
            Patient Reviews
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
