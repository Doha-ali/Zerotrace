import React from 'react';
import './pricing.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Pricing = () => {
  return (
<div className='pricing'>
    <div className='headPlans'>
        <h2>Pricing Plans</h2>
        <p>structured outline of the costs associated with a business's product or service</p>
    </div>
    <div className="pricing-container">
      <div className="pricing-plan free">
        <h3>Free</h3>
        <p> Special first packe</p>
        <hr/>
        <p className="price">$0</p>
        <ul>
          <li><span>&#10003;</span> 15 video lectures</li>
          <li><span>&#10003;</span> Access to shared chat</li>
          <li><span>&#10003;</span> Access to materials for 3 months</li>
          <li><span>&#10003;</span> Certificate completion</li>
        </ul>
        <button className="start-button">Start now</button>
      </div>

      <div className="pricing-plan premium">
        <h3>Premium</h3>
        <p> Special second packet</p>
        <hr/>
        <p className="price">$500</p>
        <ul>
          <li><span>&#10003;</span> 15 video lectures</li>
          <li><span>&#10003;</span> Access to shared chat</li>
          <li><span>&#10003;</span> Access to materials for 3 months</li>
          <li><span>&#10003;</span> Certificate completion</li>
          <li><span>&#10003;</span> +1 personal call with me</li>
        </ul>
        <button className="start-button">Start now</button>
      </div>

      <div className="pricing-plan extra">
        <h3>Extra</h3>
        <p> Special third packe</p>
        <hr/>
        <p className="price">$1000</p>
        <ul>
          <li><span>&#10003;</span> 15 video lecyure</li>
          <li><span>&#10003;</span> Access to shared chat</li>
          <li><span>&#10003;</span> Access to materials for 3 months</li>
          <li><span>&#10003;</span> Certificate completion</li>
        </ul>
        <button className="start-button">Start now</button>
      </div>
    </div>
</div>
    
  );
};


export default Pricing;