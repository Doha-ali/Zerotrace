import React from "react";
import "./form.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <h3>Have questions?<br />Get in touch!</h3>
      <form className="contact-form2">
        <div className="form-row">
          <div className="fgroup">
            
            <input type="text" id="firstName" placeholder="Name" />
          </div>
          <div className="fgroup">
            <input type="text" id="lastName" placeholder="Last name" />
          </div>
        </div>
        <div className="form-row">
          <div className="fgroup">
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="fgroup">
            
            <input type="tel" id="phone" placeholder="Phone" />
          </div>
        </div>
        <div className="fgroup">
          <textarea id="message" rows="4" placeholder="Message"></textarea>
        </div>
        <div className="form-checkbox">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">I agree that my data is collected.</label>
        </div>
        <button type="submit" className="submit-button">
          <span>&#x2709;</span>
          <span>Get In Touch</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
