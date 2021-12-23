import productData from "../data/products.json";
import { shuffleArray } from "../libs/util";
import { CATEGORIES, COLORS } from "./base";

const PRODUCTS = productData.map((item, index) => {
  let result = {
    ...item,
    colors: shuffleArray(COLORS).slice(0, Math.floor(Math.random() * 3) + 1),
    slug: item.name.split(" ").join("-").toLowerCase(),
    categories: CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)],
    img: `https://picsum.photos/id/${index}/1920/1080`,
    imgs: [
      `https://picsum.photos/id/${index}/1920/1080`,
      `https://picsum.photos/id/${index + 1}/1920/1080`,
      `https://picsum.photos/id/${index + 2}/1920/1080`,
    ],
  };

  return result;
});

export { PRODUCTS };
