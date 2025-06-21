// contact.jsx
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="content">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-description">
            I'm currently open to new freelance opportunities, collaborations, or just a friendly chat.
            Feel free to reach out through any of the channels below!
          </p>
          <div className="contact-info-grid">
            <a
              href="mailto:gzirishviligiorgiwork@gmail.com"
              className="contact-item email"
            >
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <span>gzirishviligiorgiwork@gmail.com</span>
            </a>
            <a href="tel:+995599213180" className="contact-item phone">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <span>+995 599 21 31 80</span>
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://www.facebook.com/giorgi.gzirishvili.168992/"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com/yourusername" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://www.instagram.com/giorgigzirshvili/"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://github.com/KingKaglu"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;