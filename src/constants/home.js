import { PRODUCTS } from "./products";

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
const FOLLOW_HERO = {
  data: {
    title: "Follow our channel",
    subtitle: "youtube",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    cta: "Follow",
  },
  labels: {
    front: "VapeIdle Sandbox",
    rear: "15k subscribers",
  },
};

const TREND_VAPE = PRODUCTS.slice(0, 5);

const VAPE = PRODUCTS.filter((item) => {
  return item.categories === "vape";
});
const EJUICE = PRODUCTS.filter((item) => {
  return item.categories === "e-juice";
});
const ACCESSORIES = PRODUCTS.filter((item) => {
  return item.categories === "accessories";
});

export { HEADER_HERO, TREND_VAPE, VAPE, EJUICE, ACCESSORIES, FOLLOW_HERO };
