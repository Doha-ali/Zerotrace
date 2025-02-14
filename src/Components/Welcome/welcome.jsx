import React from 'react'
import './welcome.css'
import welcome from "../images/welcome.png"

export const Welcome = () => {
  return (
    <div className='wcont'>

    <div className="welcome">
    <h1>Welcome to Zero-Trace Security System</h1>
    </div>

  <div className="cim">
    <div className="imageSection">
      <img src={welcome} alt="Security"/>
    </div>

    <div className="textSection">
      <h2>At Zero-Trace Security System,</h2>
      <p>
        Our mission is to provide innovative, world-class cybersecurity solutions that empower developers,
        organizations, and individuals to secure their digital footprints with confidence. In today’s fast-paced,
        interconnected world, protecting sensitive information and ensuring privacy is no longer optional—it is
        essential.
      </p>
    </div>
  </div>
  </div>
  )}

