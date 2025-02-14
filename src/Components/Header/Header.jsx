import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate()
    return (
        <div className="hero">
          <section className="hero">
            <div className="hero-overlay">
              <div className="hero-content">
                <h1>Zero Trace <br/> Security System</h1>
                <p>
                In an era of escalating data breaches and sophisticated cyber threats, ZeroTrace stands at the forefront of digital defense. Tailored for individuals, businesses, and developers, ZeroTrace delivers cutting-edge tools to anticipate, counteract, and neutralize risks—empowering you to safeguard your digital assets with precision and confidence
                </p>
                <button className="start-scan" onClick = {() => navigate("/VulnerScan")}>Start Scan</button>
              </div>
            </div>
        </section>
        </div>
      );
}
export default Header