import React, { useEffect } from 'react';

// constants
import { PRODUCT_TYPES } from '../../constants';

// style
import './LandingPage.css';

// store
import useProductsStore from '../../store';


const LandingPage = () => {
  const { products, fetched, fetchProducts } = useProductsStore();

  useEffect(() => {
    if (!fetched) {
      fetchProducts(PRODUCT_TYPES.beers);
    }
  }, []);

  return (
    <>
      {products?.map((product) => (<div>{product.name}</div>))}
    </>
  );
};

export default LandingPage;
