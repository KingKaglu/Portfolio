import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="content">
          <h1>Contact Me</h1>
          <p>
            I'm open to freelance work, collaborations, or just a friendly
            hello. Feel free to reach out!
          </p>
          <div className="contact-info">
            <a
              href="mailto:gzirishviligiorgiwork@gmail.com"
              className="contact-item"
            >
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              gzirishviligiorgiwork@gmail.com
            </a>
            <a href="tel:+995599213180" className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              +995 599 21 31 80
            </a>
          </div>
          <div className="social">
            <a href="https://www.facebook.com/giorgi.gzirishvili.168992/" className="social-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://www.instagram.com/giorgigzirshvili/" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
