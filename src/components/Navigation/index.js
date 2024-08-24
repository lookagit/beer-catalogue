import React from 'react';
import { Link } from 'react-router-dom';

// store
import useProductsStore from '../../store';

// style
import './Navigation.css';

const Navigation = () => {
  const totalSales = useProductsStore((state) => state.totalSales);
  return (
    <div className="navbar">
      <div className='link-container'>
        <Link to="/">Home</Link>
        <Link to="/management">Management View</Link>
      </div>
      <div className='total-sales-container'>
        <p>TOTAL SALES {totalSales}</p>
      </div>
    </div>
  );
}

export default Navigation;
