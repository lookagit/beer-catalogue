import React from 'react';
import { Link } from 'react-router-dom';

// style
import './ProductCardItem.css'


const ProductCardItem = ({ product }) => ((
  <div key={product.id} className="product-item">
    <div className='product-item-top-component'>
      <img 
        src={product.image} 
        alt={product.name}
        onError={(e) => { e.target.onerror = null; e.target.src='https://via.placeholder.com/100'; }}
        style={{ width: 100, height: 100 }} 
      />
      <h3>{product.name}</h3>
      <p>Brand: {product.brand}</p>
      <p>Price: {product.price}</p>
    </div>
    <div className='product-item-buttons'>
      <Link to={`/beer/${product.id}`} className="button-primary">View Details</Link>
    </div>
  </div>
));

export default ProductCardItem;