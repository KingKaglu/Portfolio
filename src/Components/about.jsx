// About.jsx
import React, { useEffect, useState } from 'react';
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

import './About.css';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1 className={`about-h1 ${isVisible ? 'is-animated' : 'initial-hidden'}`}>
            About Me
          </h1>
          <h2 className={`about-h2 ${isVisible ? 'is-animated' : 'initial-hidden'}`}>
            Giorgi Gzirishvili
          </h2>
          <p className={`about-bio ${isVisible ? 'is-animated' : 'initial-hidden'}`}>
            I'm a passionate web developer from Tbilisi, Georgia, dedicated to crafting
            visually stunning, highly performant, and user-friendly digital experiences.
            I thrive on turning complex problems into elegant, intuitive solutions.
          </p>

          {/* My Expertise */}
          <h3 className={`about-h3 ${isVisible ? 'is-animated' : 'initial-hidden'}`}>
            My Expertise
          </h3>
          <ul className="skills-list tech-skills">
            {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Python', 'AI/Machine Learning Concepts', 'Adobe Photoshop', 'Video Editing'].map((skill, index) => (
              <li
                key={skill}
                className={`skill-item ${isVisible ? 'is-animated' : 'initial-hidden'}`}
                style={{ animationDelay: `${0.5 + index * 0.05}s` }}
              >
                {skill}
              </li>
            ))}
          </ul>

          {/* Soft Skills & Tools */}
          <h3 className={`about-h3 ${isVisible ? 'is-animated' : 'initial-hidden'}`}>
            Soft Skills & Tools
          </h3>
          <ul className="skills-list soft-skills">
            {['Microsoft Office Suite', 'Team Collaboration', 'Effective Communication', 'Active Listening', 'Problem Solving', 'Time Management'].map((skill, index) => (
              <li
                key={skill}
                className={`skill-item ${isVisible ? 'is-animated' : 'initial-hidden'}`}
                style={{ animationDelay: `${0.6 + index * 0.05}s` }}
              >
                {skill}
              </li>
            ))}
          </ul>

          {/* Languages */}
          <h3 className={`about-h3 ${isVisible ? 'is-animated' : 'initial-hidden'}`}>
            Languages
          </h3>
          <ul className="skills-list languages">
            {['Georgian (Native)', 'English (Fluent)', 'Russian (Conversational)'].map((language, index) => (
              <li
                key={language}
                className={`skill-item ${isVisible ? 'is-animated' : 'initial-hidden'}`}
                style={{ animationDelay: `${0.7 + index * 0.05}s` }}
              >
                {language}
              </li>
            ))}
          </ul>

          {/* Contact Info */}
          <div className={`contact-info ${isVisible ? 'is-animated' : 'initial-hidden'}`}>
            <a
              href="mailto:gzirishviligiorgiwork@gmail.com"
              className="contact-item"
            >
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> gzirishviligiorgiwork@gmail.com
            </a>
            <a
              href="tel:+995599213180"
              className="contact-item"
            >
              <FontAwesomeIcon icon={faPhone} className="contact-icon" /> +995 599 21 31 80
            </a>
          </div>

          {/* Social Icons */}
          <div className={`social-icons ${isVisible ? 'is-animated' : 'initial-hidden'}`}>
            <a
              href="https://www.facebook.com/giorgi.gzirishvili.168992/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://twitter.com/GzirishviliG_"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.linkedin.com/in/giorgi-gzirishvili-b4207925a/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://www.instagram.com/giorgigzirshvili/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;