import React, { useEffect } from 'react';

// components
import LandingPageTitle from '../../components/LandingPageTitle';
import Hero from '../../components/Hero';
import Loader from '../../components/Loader';

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

  if (products.length === 0 && !fetched) {
    return <Loader />;
  }

  return (
    <>
      <Hero 
        title="Welcome to the Beer Catalogue"
        subtitle="Discover your favorite beers"
      />
      <LandingPageTitle title="All Beers" />
      {products?.map((product) => (<div>{product.name}</div>))}
    </>
  );
};

export default LandingPage;
