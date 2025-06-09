import { useState } from 'react';
import './nav.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="nav">
      <div className="nav-top">
        <div className="logo">Giorgi Gzirishvili</div>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>

      <div className={`nav-menu-container ${isOpen ? 'open' : ''}`}>
        <ul className="menu">
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
          <li><a href="#blog" onClick={toggleMenu}>Blog</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
        <a href="#contact" className="cta-button">Let's Talk</a>
      </div>
    </nav>
  );
}

export default Nav;
