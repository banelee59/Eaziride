import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>EaziRide</h3>
            <p>145 Second Street<br />Parkmore, Sandton,
            2196<br />South Africa</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/Earn-100-Profits" onClick={scrollToTop}>Earn 100% Profits</Link></li>
              <li><Link to="/support" onClick={scrollToTop}>Support</Link></li>
              <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@eaziride.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61554108308817&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i> 
              </a>
              <a href="https://x.com/EaziRide_za?t=YxG2PnpEHyCRaIknkjkYRw&s=09" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i> 
              </a>
              <a href="https://www.instagram.com/eaziride_za?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@eaziride_za?_t=8qamAcAYhja&_r=1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 EaziRide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
