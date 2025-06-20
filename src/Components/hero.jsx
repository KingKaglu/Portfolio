// hero.jsx
import React, { useState } from 'react'; // Import useState
import './hero.css';
import myImg from '../assets/giorgigzirishvili.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

function Hero() {
  const [isImageAnimated, setIsImageAnimated] = useState(false); // New state for animation

  const handleImageClick = () => {
    setIsImageAnimated(true);
    // Reset animation after a short delay to allow re-triggering
    setTimeout(() => {
      setIsImageAnimated(false);
    }, 1000); // Duration of the animation
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <p className="intro-text">Hello, I'm</p>
          <h1 className="hero-title">Giorgi Gzirishvili</h1>
          <h2 className="hero-subtitle">WEB DEVELOPER</h2>
          <p className="hero-description">
            I'm a passionate web developer dedicated to crafting visually stunning, highly performant, and user-friendly digital experiences. I thrive on turning complex problems into elegant, intuitive solutions.
          </p>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn btn-primary">
              Projects <FontAwesomeIcon icon={faArrowRight} className="btn-icon" />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Hire Me <FontAwesomeIcon icon={faUser} className="btn-icon" />
            </a>
          </div>
          <div className="social-links">
            <a href="https://www.facebook.com/giorgi.gzirishvili.168992/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://www.instagram.com/giorgigzirshvili/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div
          className={`hero-image-wrapper ${isImageAnimated ? 'clicked-animation' : ''}`}
          onClick={handleImageClick} // Add click handler
        >
          <div className="hero-image-border">
            <img src={myImg} alt="Giorgi Gzirishvili" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;