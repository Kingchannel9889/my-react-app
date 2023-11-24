
import React from 'react';
import { Link } from 'react-router-dom';


function PlansPrice() {
  return (
    <div className="plans-container">
      <h1>Choose Your Plan</h1>

      <div className="plan">
        <h2>Basic Plan</h2>
        <p>Features:</p>
        <ul>
          <li>Access to basic content</li>
          <li>Limited number of devices</li>
          <li>Email support</li>
        </ul>
        <p>Price: $9.99/month</p>
      </div>

      <div className="plan">
        <h2>Premium Plan</h2>
        <p>Features:</p>
        <ul>
          <li>Unlimited access to all content</li>
          <li>Stream on multiple devices</li>
          <li>24/7 priority support</li>
          <li>Offline downloads</li>
        </ul>
        <p>Price: $19.99/month</p>
      </div>

   

      <Link to="/checkout" className="subscribe-link">
        Subscribe Now
      </Link>
    </div>
  );
}

export default PlansPrice;
