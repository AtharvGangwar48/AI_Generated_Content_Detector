import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiMail, FiLinkedin, FiTwitter } from 'react-icons/fi';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">AI Content Checker</h3>
            <p className="footer-description">
              A tool for detecting AI-generated content with high accuracy using Data Structure based Algorithm.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/developers">Developers</Link></li>
              <li><Link to="/trial">Try It</Link></li>
              <li><Link to="/suggestion">Suggestion</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Connect</h3>
            <div className="footer-social">
              <a href="https://github.com/AtharvGangwar48/AI_Generated_Content_API" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="mailto:atharvgangwar8@gmail.com" aria-label="Email">
                <FiMail />
              </a>
              <a href="https://in.linkedin.com/in/atharvgangwar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="https://x.com/Atharv_48" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FiTwitter />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} AI Content Checker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
