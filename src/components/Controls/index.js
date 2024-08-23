import React from 'react';

// style
import './Controls.css';

// constants
import { SORTING_TYPES } from '../../constants';

const Controls = ({
  filters,
  sortOption,
  handleFilterChange,
  handleSortChange
}) => (
  <div className="controls">
    <input
      type="text"
      name="brand"
      placeholder="Search by brand"
      value={filters.brand}
      onChange={handleFilterChange}
    />
    <input
      type="number"
      name="minPrice"
      placeholder="Min Price"
      value={filters.minPrice}
      onChange={handleFilterChange}
    />
    <input
      type="number"
      name="maxPrice"
      placeholder="Max Price"
      value={filters.maxPrice}
      onChange={handleFilterChange}
    />
    <select value={sortOption} onChange={handleSortChange}>
      <option value="">Sort By</option>
      <option value={SORTING_TYPES.priceAsc}>Price Ascending</option>
      <option value={SORTING_TYPES.priceDesc}>Price Descending</option>
    </select>
  </div>
);

export default Controls;