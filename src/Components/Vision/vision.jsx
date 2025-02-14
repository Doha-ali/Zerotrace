import React from 'react'
import './vision.css'
import visionImage from "../images/our vision2.jpg"
export const Vision = () => {
    return (
        <section className="our-vision-container">
          <div className="text-section">
            <h2>We Have Been Certified &<br/> Trusted By More Than<br/> <span>750+</span> Clients</h2>
            <p>
              Zero Trace is more than just a name; it’s a philosophy. We are a team of 
              seasoned cybersecurity experts, software architects, and ethical hackers united 
              by a shared goal: creating robust solutions that redefine how security is approached 
              in the digital landscape.
            </p>
            <div className="stats">
              <div>
                <h3>200K+</h3>
                <p>Subscriber</p>
              </div>
              <div>
                <h3>400K+</h3>
                <p>Client</p>
              </div>
              <div>
                <h3>96%</h3>
                <p>Success</p>
              </div>
            </div>
          </div>
          <div className="vision-section">
            <h2>Our Vision</h2>
            <img src={visionImage} alt="Our Vision" />
            <p>
              Our vision is to set the global standard for cyber security, enabling a world 
              where data security and privacy are a seamless part of everyday life.
            </p>
            <button className="read-more-btn">READ MORE</button>
          </div>
        </section>
      );
}
