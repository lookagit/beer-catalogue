import React from 'react';

// components
import ProductCardItem from '../ProductCardItem';

// style
import './ProductsGrid.css';

const ProductsGrid = ({ products }) => (
  <>
    <div className="products-page-grid">
      {products?.map((product) => <ProductCardItem key={product.id} product={product} />)}
    </div>
    <div>
      {!products?.length && <div>NO RESULTS</div>}
    </div>
  </>
)

export default ProductsGrid;