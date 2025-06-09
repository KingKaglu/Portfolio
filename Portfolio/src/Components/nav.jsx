
import './nav.css';


function Nav({ isOpen, toggleMenu }) {
    return (
      <nav className={`nav ${isOpen ? "active" : ""}`}>
        <div className="logo">Giorgi Gzirishvili</div>
        <ul className="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="cta-button">Let's Talk</a>
        <div className="hamburger" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    );
  }
  export default Nav