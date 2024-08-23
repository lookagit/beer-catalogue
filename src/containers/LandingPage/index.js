import React, { useEffect, useState, useCallback, useMemo } from 'react';

// components
import Controls from '../../components/Controls';
import LandingPageTitle from '../../components/LandingPageTitle';
import Hero from '../../components/Hero';
import Loader from '../../components/Loader';

// constants
import { PRODUCT_TYPES, SORTING_TYPES } from '../../constants';

// style
import './LandingPage.css';

// store
import useProductsStore from '../../store';



const LandingPage = () => {
  const [filters, setFilters] = useState({
    brand: '',
    minPrice: '',
    maxPrice: '',
  });
  const [sortOption, setSortOption] = useState('');
  const { products, fetched, fetchProducts } = useProductsStore();

  useEffect(() => {
    if (!fetched) {
      fetchProducts(PRODUCT_TYPES.beers);
    }
  }, []);

  const handleFilterChange = useCallback((e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: name !== 'brand' && value ? parseFloat(value) : value
    }));
  }, []);

  const handleSortChange = useCallback((e) => setSortOption(e.target.value), []);

  const filteredProducts = useMemo(() => products.filter((product) => (
    (!filters.brand || product.brand.toLowerCase().includes(filters.brand.toLowerCase())) &&
    (!filters.minPrice || product.priceNumber >= filters.minPrice) &&
    (!filters.maxPrice || product.priceNumber <= filters.maxPrice)
  ))
  .sort((a, b) => {
    if (sortOption === SORTING_TYPES.priceAsc) return a.priceNumber - b.priceNumber;
    if (sortOption === SORTING_TYPES.priceDesc) return b.priceNumber - a.priceNumber;
    return 0;
  }), [products, sortOption, filters]);

  if (products.length === 0 && !fetched) {
    return <Loader />;
  }

  return (
    <>
      <Hero 
        title="Welcome to the Beer Catalogue"
        subtitle="Discover your favorite beers"
      />
      <Controls 
        filters={filters} 
        sortOption={sortOption}
        handleSortChange={handleSortChange}
        handleFilterChange={handleFilterChange}
      />
      <LandingPageTitle title="All Beers" />
      {filteredProducts?.map((product) => (<div>{product.name}</div>))}
    </>
  );
};

export default LandingPage;
