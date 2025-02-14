import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faApple, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>Zero Trace</h3>
          <div className="social-icons">
            {/* <i className="fab fa-facebook-f"></i>
            <i className="fab fa-apple"></i>
            <i className="fab fa-twitter"></i> */}
            <FontAwesomeIcon icon={faFacebookF} size="2x" className="ii"/>
            <FontAwesomeIcon icon={faApple} size="2x" className="ii"/>
            <FontAwesomeIcon icon={faTwitter} size="2x" className="ii"/>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h4>Navigation</h4>
            <ul>
              <li>Home</li>
              <li>Tools</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4>Services Offer</h4>
            <ul>
              <li>Cloud Storage Security</li>
              <li>Password Security</li>
              <li>Personal Data Security</li>
              <li>File System Security</li>
            </ul>
          </div>
          <div>
            <h4>Useful Links</h4>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Pages</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4>Contact Us</h4>
            <ul>
              <li>
                <i className="fas fa-phone-alt"></i> +09 231 346 117
              </li>
              <li>
                <i className="fas fa-envelope"></i> admin@gmail.com
              </li>
              <li>
                <i className="fas fa-globe"></i> www.website.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
