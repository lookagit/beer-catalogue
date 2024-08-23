import React from 'react';
import { useParams } from 'react-router-dom';

// style
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className="product-container">
      <div className="product-header">
        <img 
          src=""
          alt="imageName"
          className="product-hero-image"
          onError={(e) => { e.target.onerror = null; e.target.src='https://via.placeholder.com/500x500'; }}
        />
      </div>
      <div className="product-details">
        <div className="details-wrapper">
          <h1 className="product-title">NAME</h1>
          <p className="product-brand">by BRAND</p>
          <div className="price-and-ratings">
            <span className="product-price">Price: 100</span>
            <div className="ratings">
              <span className="rating">Rating: 5</span>
              <span className="reviews">Reviews: 0</span>
            </div>
          </div>
          <p className="product-description">SOME DETAILS</p>
          <div className="additional-details">
            <span className="product-style">Style: SOME STYLE</span>
            <span className="product-abv">ABV: 123</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
