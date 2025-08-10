import {
  FaGithub, FaFacebook, FaInstagram, FaLinkedin
} from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer id="Contact" className="footer">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="footer-logo">Folio</h2> 
          <br />
          <p className="footer-tagline">A library that fits in your world</p>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://github.com/yassen-saaeed" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="#" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="#" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="#" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="copyright">
          <p className="copyright-text">
            Developed By <span className="developer-names">Yassen</span> 
            <span className="copyright-symbol"> © 2025 All Rights Reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;