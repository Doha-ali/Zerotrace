import React from 'react'
import './emailBreach.css'
import { useNavigate } from "react-router-dom";
import emailBreach2 from '../Components/images/email breach2.png'
import EmailBreachCheck from '../Components/Breach/breach';
export const Emailbreach = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        navigate("/login");
      };
  return (
    <div className='Tool3sec'>
        <section className='Tool3head'>
            <h1>Email Breach</h1>
        </section>
        
        <section className='middleEmailBreach'>
            <div className='EmailBreachText'>
                <h2>Email Breach</h2>
                <p>An email breach occurs when unauthorized individuals gain access to someone’s email account or email server. This can happen through hacking, phishing, or other forms of cyberattack. Once the email account is compromised, the attacker might steal sensitive information, send out spam or malicious emails, or even access personal or confidential data.
                Email breaches can have significant consequences, such as identity theft, data loss, or reputational damage, depending on the type of information in the account. It’s important to use strong passwords, enable two-factor authentication, and be cautious about clicking on suspicious links or attachments to protect yourself from email breaches.</p>
            </div>
            <div className='EmailBreachImg'>
                <img src={emailBreach2} alt='...'/>
            </div>
        </section>
        <EmailBreachCheck/>
    </div>
  )
}