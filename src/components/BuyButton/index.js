import React from 'react';

// store
import useProductsStore from '../../store';

//style
import './BuyButton.css'

const BuyButton = ({ productId }) => {
  const buyProduct = useProductsStore((state) => state.buyProduct);
  return (
    <button className="buy-button" onClick={() => buyProduct(productId)}>
      Buy
    </button>
  );
};

export default BuyButton;
