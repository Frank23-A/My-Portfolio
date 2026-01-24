import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content-wrap">
        <div className="brands">
          <div className="brand-logo-name">
            <div className="brand-logo">
              <h3>Frankline Otieno</h3>
            </div>
          </div>
          <div className="brands-paragraph-content">
            <p>QA Engineer</p>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-links-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-links-section">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto: frankotieno044@gmail.com">Email</a></li>
              <li><a href="tel: +254757463052">Phone</a></li>
              <li><a href="https://wa.me/254757463052" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>
          <div className="footer-links-section">
            <h4>Skills</h4>
            <ul>
              <li><a href="/#skills">Cloud Platforms</a></li>
              <li><a href="/#skills">DevOps & CI/CD</a></li>
              <li><a href="/#skills">Infrastructure as Code</a></li>
              <li><a href="/#skills">Containerization</a></li>
            </ul>
          </div>
          <div className="footer-links-section">
            <h4>Social</h4>
            <ul>
              <li><a href="" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="" target="_blank" rel="noopener noreferrer">GitHub</a></li> 
           </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-contact-social">
          <span className="footer-contact-info">
            Contact Me: <a href="mailto:ochiengcharles531@gmail.com">ochiengcharles531@gmail.com</a> | <a href="tel:+254718166201">+254718166201</a>
          </span>
          <span className="footer-social-links">
            <a href="" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            <a href="" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-github"></i></a>
            <a href="" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-gitlab"></i></a>
            <a href="" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-x"></i></a>
            <a href="" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          </span>
        </div>
        <p>&copy; {new Date().getFullYear()} Charles Ochieng. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 