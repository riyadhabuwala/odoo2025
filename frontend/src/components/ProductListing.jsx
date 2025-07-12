import React from 'react';
import './ProductList.css'; // Import the CSS file for styling
const ProductList = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <div className="product-image-container">
            <img
              src={`https://images.unsplash.com/photo-${getImageId(product.category)}?w=280&h=320&fit=crop`}
              alt={product.title}
              className="product-image"
            />
            
            {/* Category badge */}
            <div className="category-badge">
              {product.category}
            </div>
            
            {/* Quick actions */}
            <div className="quick-actions">
              <button className="quick-btn wishlist-btn" aria-label="Add to wishlist">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <button className="quick-btn view-btn" aria-label="Quick view">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="product-info">
            <h3 className="product-name">{product.title}</h3>
            
            <div className="product-details">
              <div className="points-info">
                <span className="points-required">{product.points} pts</span>
                <span className={`availability ${product.availableForPoints ? 'in-stock' : 'out-of-stock'}`}>
                  {product.availableForPoints ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              
              <button 
                className={`add-to-cart-btn ${!product.availableForPoints ? 'disabled' : ''}`}
                disabled={!product.availableForPoints}
              >
                {product.availableForPoints ? 'Add to Cart' : 'Notify Me'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

// Helper function to get image IDs based on category
const getImageId = (category) => {
  const imageIds = {
    'Ethnic': '1583391733956-6c78276477e2',
    'Jackets': '1551698618-1dfe5d97d256', 
    'Casual': '1521572163474-6864f9cf17ab',
    'Footwear': '1549298916-b41d501d3772',
    'Accessories': '1506629905061-6d07c4e8b3b6'
  };
  return imageIds[category] || '1445205170230-053b83016050';
};

export default ProductList;