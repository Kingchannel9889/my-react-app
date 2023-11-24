// ProductPage.js

import React from 'react';
import './App.css'; // Import your CSS file for styling

function ProductPage() {
  const product = {
    name: 'FlezVPN',
    description: 'Protect your online privacy with our powerful VPN service.',
    serverLocations: 'Servers in 50+ locations worldwide',
    securityFeatures: ['256-bit encryption', 'Kill switch', 'No-logs policy'],
    price: 9.99,
    imageUrl: 'Flez.png', // Replace with your actual image URL
  };

  return (
    <div className="product-page-container">
      <div className="product-details">
        <div className="product-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>

        <div className="info">
          <h1>{product.name}</h1>
          <p className="description">{product.description}</p>

          <div className="key-details">
            <div>
              <h2>Server Locations</h2>
              <p>{product.serverLocations}</p>
            </div>

            <div>
              <h2>Security Features</h2>
              <ul className="features">
                {product.securityFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <h2>Price</h2>
          <p className="price">${product.price.toFixed(2)} / month</p>
        </div>
      </div>

      <button className="buy-now-button">Buy Now</button>
    </div>
  );
}

export default ProductPage;
