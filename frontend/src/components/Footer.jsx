import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="brand-name">ReWear</h3>
            <p className="brand-tagline">Community Clothing Exchange</p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Community</h4>
              <ul>
                <li><a href="#exchange">Exchange Items</a></li>
                <li><a href="#donate">Donate Clothes</a></li>
                <li><a href="#events">Local Events</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4>Sustainability</h4>
              <ul>
                <li><a href="#impact">Our Impact</a></li>
                <li><a href="#tips">Fashion Tips</a></li>
                <li><a href="#education">Learn More</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4>Support</h4>
              <ul>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#about">About ReWear</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} ReWear – Community Clothing Exchange</p>
          <p className="mission">Promoting sustainability through fashion reuse 🌱</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;