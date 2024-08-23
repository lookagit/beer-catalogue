import React from 'react';
import { Link } from 'react-router-dom';

// style
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="navbar">
      <div className='link-container'>
        <Link to="/">Home</Link>
        <Link to="/management">Management View</Link>
      </div>
      <div className='total-sales-container'>
        <p>TOTAL SALES 5</p>
      </div>
    </div>
  );
}


export default Navigation;