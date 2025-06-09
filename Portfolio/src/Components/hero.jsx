import React from 'react';
import './hero.css';
import myImg from '../assets/giorgigzirishvili.jpg'


function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="content">
          <h1>Hi, I'm Your Giorgi!</h1>
          <h2>WEB DEVELOPER</h2>
          <p>
            I'm a passionate new web developer creating stunning, user-friendly websites.
            With a keen eye for design, creating designs according to your need and I transform ideas into functional digital experiences.
          </p>
          <div className="buttons">
            <a href="#portfolio" className="project-button">
              Projects <i className="fas fa-arrow-right button-icon"></i>
            </a>
            <a href="#contact" className="hire-button">
              Hire Me <i className="fas fa-user button-icon"></i>
            </a>
          </div>
          <div className="social">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="image">
          <img src={myImg} alt="Your Photo" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
