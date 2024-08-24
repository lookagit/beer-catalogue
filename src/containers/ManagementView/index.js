import React, { useState, useCallback } from 'react';

// components
import SalesChart from '../../components/SalesChart';

// store
import useProductsStore from '../../store';

// style
import './ManagementView.css';

const ManagementView = () => {
  const [product, setNewProduct] = useState({
    abv: '',
    brand: '',
    details: '',
    image: '',
    price: '',
    name: '',
    style: ''
  });
  const addProduct = useProductsStore((state) => state.addProduct);
  
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setNewProduct({ ...product, [name]: value });
  }, [product]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    addProduct({ ...product, price: `$${product.price}` });
    setNewProduct({
      abv: '',
      brand: '',
      details: '',
      image: '',
      price: '',
      name: '',
      style: ''
    });
  }, [product]);

  return (
    <div className='management-container'>
      <div className='management-title'>
        <h1>Management View</h1>
      </div>
      <SalesChart />
      <form onSubmit={handleSubmit} className="beer-form">
        <div>
          <h3>Add a New Beer</h3>
        </div>
        <div className='form-container'>
          <input type="text" name="name" placeholder="Name" value={product.name} onChange={handleInputChange} />
          <input type="text" name="brand" placeholder="Brand" value={product.brand} onChange={handleInputChange} />
          <input type="text" name="style" placeholder="Style" value={product.style} onChange={handleInputChange} />
          <input type="text" name="abv" placeholder="ABV" value={product.abv} onChange={handleInputChange} />
          <input type="text" name="price" placeholder="Price" value={product.price} onChange={handleInputChange} />
          <input type="text" name="image" placeholder="Image" value={product.image} onChange={handleInputChange} />
          <input type="text" name="details" placeholder="Details" value={product.details} onChange={handleInputChange} />
          <button type="submit">Add Beer</button>
        </div>
      </form>
    </div>
  );
};

export default ManagementView;
