import React from 'react';

// style
import './ManagementView.css';

const ManagementView = () => {
  return (
    <div className='management-container'>
      <div className='management-title'>
        <h1>Management View</h1>
      </div>
      <form onSubmit={handleSubmit} className="beer-form">
        <div>
          <h3>Add a New Beer</h3>
        </div>
        <div className='form-container'>
          <input type="text" name="name" placeholder="Name" value={newBeer.name} onChange={() => {}} />
          <input type="text" name="brand" placeholder="Brand" value={newBeer.brand} onChange={() => {}} />
          <input type="text" name="style" placeholder="Style" value={newBeer.style} onChange={() => {}} />
          <input type="text" name="abv" placeholder="ABV" value={newBeer.abv} onChange={() => {}} />
          <input type="text" name="price" placeholder="Price" value={newBeer.price} onChange={() => {}} />
          <input type="text" name="image" placeholder="Image" value={newBeer.image} onChange={() => {}} />
          <input type="text" name="details" placeholder="Details" value={newBeer.details} onChange={() => {}} />
          <button type="submit">Add Beer</button>
        </div>
      </form>
    </div>
  );
};

export default ManagementView;
