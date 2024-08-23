const brands = ['BrewDog', 'Guinness', 'Heineken', 'Budweiser', 'Coors', 'Lav', 'Tuborg'];
const styles = ['IPA', 'Stout', 'Lager', 'Pilsner', 'Pale Ale'];
const abvs = ['4.5%', '5.0%', '5.5%', '6.0%', '6.5%'];
const details = [
  'A rich, flavorful ale with hints of coffee and chocolate.',
  'A light, refreshing lager perfect for summer days.',
  'A bitter, hoppy IPA with citrus and pine notes.',
  'A dark stout with deep malt complexity and a smooth finish.',
  'A crisp pilsner with a delicate balance of bitterness and malt sweetness.'
];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function getRandomABV() {
  return getRandomElement(abvs);
}

export function getRandomBrand() {
  return getRandomElement(brands);
}

export function getRandomDetails() {
  return getRandomElement(details);
}

export function getRandomStyle() {
  return getRandomElement(styles);
}
