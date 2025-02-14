import React from "react";
import "./wehelp.css";

const Wehelp = () => {
  return (
<div className="parent-section">
    <div className="cyber-security-container">
      <div className="left-section">
        <h2>We Help You Have Strong Cyber Security</h2>
        <button className="contact-btn">Contact Us</button>
      </div>
      <div className="right-section">
        <div className="info-box">
          <h3>Help companies Avoid Cyber Threats</h3>
          <p>
            Protect your networks by setting up firewalls and encrypting
            information. This will help minimize the risk of cyber criminals
            gaining access to confidential information. Make sure your Wi-Fi
            network is hidden and password protected.
          </p>
          <hr />
        </div>
        <div className="info-box">
          <h3>Protect Any Website From Hackers</h3>
          <p>
            An SSL certificate is a protocol that encrypts all communications
            to and from a website. Installing one of these programs will make
            sure that even if a hacker intercepts data from your website, they
            will never be able to understand what it is.
          </p>
          <hr />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Wehelp;