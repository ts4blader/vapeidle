import { CATEGORIES, COLORS } from "./base";
import productData from "../data/products.json";
import { shuffleArray } from "../libs/util";

const HEADER_HERO = {
  data: {
    title: "Manto AIO XR 80W",
    subtitle: "vape",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    cta: "buy now",
  },
  labels: {
    front: "Rincoe vaping - Starter kit",
    rear: "Manto Series",
  },
};

const TREND_VAPE = productData
  .map((item, index) => {
    let result = {
      ...item,
      colors: shuffleArray(COLORS).slice(0, Math.floor(Math.random() * 3) + 1),
      slug: item.name.split(" ").join("-").toLowerCase(),
      categories: CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)],
      img: `https://picsum.photos/id/${index}/1920/1080`,
    };

    return result;
  })
  .slice(0, 5);

export { HEADER_HERO, TREND_VAPE };
