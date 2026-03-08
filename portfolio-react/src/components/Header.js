import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        {/* Brand */}
        <div className="brand">
          <span>Frank</span>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Nav Links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#about-main">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="https://franklineotieno.hashnode.dev" target="_blank" rel="noopener noreferrer">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; 