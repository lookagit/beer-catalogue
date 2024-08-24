import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// store
import useProductsStore, { getProductById } from '../../store';

// components
import BuyButton from '../../components/BuyButton';
import Loader from '../../components/Loader';

// style
import './ProductDetails.css';

const ProductDetails = () => {
  const products = useProductsStore((state) => state.products);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    const productDetails = getProductById(products, id);
    if (productDetails) {
      setProduct(productDetails);
    } else {
      console.error('Product not found');
    }
  }, [id, getProductById]);

  if (!product) {
    return <Loader />;
  }

  return (
    <div className="product-container">
      <div className="product-header">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-hero-image"
          onError={(e) => { e.target.onerror = null; e.target.src='https://via.placeholder.com/500x500'; }}
        />
      </div>
      <div className="product-details">
        <div className="details-wrapper">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-brand">by {product.brand}</p>
          <div className="price-and-ratings">
            <span className="product-price">Price: {product.price}</span>
            <div className="ratings">
              <span className="rating">Rating: {product.rating?.average || 0}</span>
              <span className="reviews">Reviews: {product.rating?.reviews || 0}</span>
            </div>
          </div>
          <p className="product-description">{product.details}</p>
          <div className="additional-details">
            <span className="product-style">Style: {product.style}</span>
            <span className="product-abv">ABV: {product.abv}</span>
          </div>
          <BuyButton productId={product.id} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
