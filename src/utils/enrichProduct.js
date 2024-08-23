import { getRandomABV, getRandomBrand, getRandomDetails, getRandomStyle } from "./getRandomData";

export const enrichProduct = (product) => ({
  ...product,
  abv: product.abv || getRandomABV(),
  brand: product.brand || getRandomBrand(),
  details: product.details || getRandomDetails(),
  style: product.style || getRandomStyle(),
})

export const enrichCommonProperties = (product) => ({
  ...product,
  priceNumber: parseFloat(product.price.replace(/\$/g, ''))
});