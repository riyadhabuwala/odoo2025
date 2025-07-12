import React from 'react';
import './ProductCard.css';

const ProductCard = ({ item }) => (
  <div className="product-card">
    <div className="product-image-placeholder"></div>
    <h3 className="product-title">{item.title}</h3>
    <p className="product-category">{item.category}</p>
    <p className="product-points">Points: {item.points}</p>
    <button className={`product-button ${item.availableForPoints ? 'redeem' : 'swap'}`}>
      {item.availableForPoints ? 'Redeem' : 'Swap'}
    </button>
  </div>
);

export default ProductCard;