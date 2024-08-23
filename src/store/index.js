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
