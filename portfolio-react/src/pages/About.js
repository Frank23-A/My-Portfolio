import React from 'react';
import '../styles/About.css';
import aboutBg from '../assets/images/about-bg.jpg';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${aboutBg})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', textAlign: 'center', padding: '100px 20px' }}>
        <div className="about-hero-content">
          <h1>About Me</h1>
          <div className="underline"></div>
        </div>
      </section>

      <section className="about-main">
        <div className="about-container">
          <div className="profile-container">
            <img src="/assets/images/charles_ochieng_profile.png" alt="Charles Ochieng" className="profile-image" />
          </div>
          <div className="about-text">
            <h2>Cloud Solutions Architect & DevOps Engineer</h2>
            <p>
              I am a passionate Cloud Solutions Architect and DevOps Engineer with extensive experience in designing and implementing cloud infrastructure solutions. My expertise spans across major cloud platforms including AWS, Azure, and Google Cloud.
            </p>
            <p>
              With a strong focus on automation and best practices, I help organizations streamline their cloud operations, optimize costs, and ensure high availability. I specialize in:
            </p>
            <ul>
              <li>Cloud Infrastructure Design and Implementation</li>
              <li>DevOps Practices and Tools</li>
              <li>Containerization and Orchestration</li>
              <li>Infrastructure as Code (IaC)</li>
              <li>CI/CD Pipeline Automation</li>
              <li>Cloud Security and Compliance</li>
            </ul>
            <p>
              My goal is to help businesses leverage the power of cloud computing and DevOps practices to achieve their digital transformation objectives while maintaining security, scalability, and cost-effectiveness.
            </p>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2>Technical Skills</h2>
        <div className="underline"></div>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Cloud Platforms</h3>
            <ul>
              <li>AWS (Amazon Web Services)</li>
              <li>Microsoft Azure</li>
              <li>Google Cloud Platform</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>DevOps Tools</h3>
            <ul>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Jenkins</li>
              <li>GitLab CI/CD</li>
              <li>Terraform</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Programming & Scripting</h3>
            <ul>
              <li>Python</li>
              <li>Bash</li>
              <li>JavaScript</li>
              <li>YAML</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Get In Touch</h2>
        <div className="underline"></div>
        <div className="contact-container">
          <p>Interested in working together? Let's connect!</p>
          <div className="contact-buttons">
            <a href="mailto: frankotieno044@gmail.com" className="cta">Email Me</a>
            <a href="https://wa.me/254746315094" target="_blank" rel="noopener noreferrer" className="cta">WhatsApp</a>
            <a href="https://www.linkedin.com/in/frank-otieno-854143286" target="_blank" rel="noopener noreferrer" className="cta">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 