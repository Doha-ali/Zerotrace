import React from "react";
import "./cyberSecuritySolution.css";
import cloudIcon from "../images/cloud storage image.png"
import passwordIcon from "../images/password security image.png";
import personalDataIcon from "../images/personal data security.png";
import fileSystemIcon from "../images/file system security.png";

const CyberSecuritySolution = () => {
  return (
    <section className="cc">
      <div className="featuressection">
        <div className="feat">
          <img src={cloudIcon} alt="Cloud Storage Security" />
          <div>
            <h3>Cloud Storage Security</h3>
            <p>
              Cloud data security protects data that is stored or moving in and out of the cloud 
              from security threats, unauthorized access, theft, and corruption.
            </p>
          </div>
        </div>
        <div className="feat">
          <img src={passwordIcon} alt="Password Security" />
          <div>
            <h3>Password Security</h3>
            <p>
              To identify and verify user identity, thus restricting access to devices, accounts 
              and files by unauthorized users.
            </p>
          </div>
        </div>
        <div className="feat">
          <img src={personalDataIcon} alt="Personal Data Security" />
          <div>
            <h3>Personal Data Security</h3>
            <p>
              The practice of protecting digital information from unauthorized access, corruption 
              or theft throughout its entire lifecycle.
            </p>
          </div>
        </div>
        <div className="feat">
          <img src={fileSystemIcon} alt="File System Security" />
          <div>
            <h3>File System Security</h3>
            <p>
              File security is a vital part of an application security (AppSec) strategy.
            </p>
          </div>
        </div>
      </div>
      <div className="rightSec">
        <h2>Cyber Security<br/> Solution</h2>
        <p>
          Products or services designed to protect digital systems and data from cyberattacks. These 
          solutions include a wide range of security components such as firewalls, DDoS protection, 
          microsegmentation, account takeover protection, API security, bot management, and web application security.
        </p>
        <button className="learnMore">LEARN MORE</button>
      </div>
    </section>
  );
};

export default CyberSecuritySolution;

