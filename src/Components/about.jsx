import React from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="content">
          <h1>About Me</h1>
          <h2>Giorgi Gzirishvili</h2>
          <p>
            I'm a new web developer from Tbilisi, Georgia, dedicated to creating
            visually stunning and user-friendly websites with seamless digital experiences.
          </p>

          <h3>Skills</h3>
          <ul className="skills-list">
            <li className="skill-item">HTML</li>
            <li className="skill-item">CSS</li>
            <li className="skill-item">JavaScript</li>
            <li className="skill-item">React</li>
            <li className="skill-item">Python</li>
          </ul>
          <ul className="skills-list">
            <li className="skill-item">Microsoft Office</li>
            <li className="skill-item">Teamwork</li>
            <li className="skill-item">Communication</li>
            <li className="skill-item">Listening</li>
            <li className="skill-item">Photoshop</li>
            <li className="skill-item">Video Editing</li>
          </ul>

          <h3>Languages</h3>
          <ul className="skills-list">
            <li className="skill-item">Georgian</li>
            <li className="skill-item">English</li>
            <li className="skill-item">Russian</li>
          </ul>

          <div className="contact-info">
            <a href="mailto:gzirishviligiorgiwork@gmail.com" className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> gzirishviligiorgiwork@gmail.com
            </a>
            <a href="tel:+955599213180" className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" /> +955 599 21 31 80
            </a>
          </div>

          <div className="social">
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
