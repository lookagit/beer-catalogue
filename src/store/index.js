import axios from 'axios';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware'
// utils
import { enrichCommonProperties, enrichProduct } from '../utils/enrichProduct';

// constants
import { API_URLS } from '../constants';

const useProductsStore = create(devtools((set) => ({
  products: [],
  fetched: false,
  sales: {},
  salesByBrand: {},
  totalSales: 0,
  buyProduct: (productId) => set((state) => {
    const product = state.products.find(b => b.id === productId);
    const brand = product ? product.brand : 'Unknown';
    const currentProductSales = state.sales[productId] || 0;
    const currentBrandSales = state.salesByBrand[brand] || 0;

    const newSalesByProduct = {
      ...state.sales,
      [productId]: currentProductSales + 1,
    };

    const newSalesByBrand = {
      ...state.salesByBrand,
      [brand]: currentBrandSales + 1,
    };

    return {
      totalSales: state.totalSales + 1,
      sales: newSalesByProduct,
      salesByBrand: newSalesByBrand,
    };
  }),
  fetchProducts: (productType) => set(async (state) => {
    try {
      const response = await axios.get(API_URLS[productType]);
      const enrichedProducts = response.data.map(product => ({
        ...enrichCommonProperties(product),
        ...enrichProduct(product),
        type: productType
      }));
      set({ products: [...state.products, ...enrichedProducts], fetched: true });
    } catch (error) {
      console.error('Error fetching beers:', error);
    }
  }),
}), { enabled: Boolean(window.__REDUX_DEVTOOLS_EXTENSION__) }));

export default useProductsStore;
