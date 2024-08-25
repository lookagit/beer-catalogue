import React from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import ProductCardItem from '../ProductCardItem';

const ProductsGrid = ({ products }) => {
  return (
    <div style={{ height: '100vh', width: '100%', marginTop: '10px', overflow: 'hidden' }}>
      <AutoSizer>
        {({ height, width }) => {
          const columnWidth = width > 768 ? width / 4 : width;
          const columnCount = width > 768 ? 4 : 1;
          return (
            <Grid
              columnCount={columnCount}
              columnWidth={columnWidth}
              height={height}
              rowCount={Math.ceil(products.length / columnCount)}
              rowHeight={370} // Adjust based on your ProductCardItem height
              width={width}
              itemData={products}
            >
              {GridCell}
            </Grid>
          );
        }}
      </AutoSizer>
    </div>
  );
};

const GridCell = ({ columnIndex, rowIndex, style, data }) => {
  const product = data[rowIndex * 4 + columnIndex];
  if (!product) {
    return null;
  }
  return (
    <div style={style}>
      <ProductCardItem product={product} />
    </div>
  );
};

export default ProductsGrid;
