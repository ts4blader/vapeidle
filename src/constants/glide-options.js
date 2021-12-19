const TREND_OPTIONS = {
  perView: 1,
  autoplay: 7000,
  gap: 0,
};

const carousel_gap = 20;

const CAROUSEL_OPTIONS = {
  perView: 2,
  autoplay: 7000,
  gap: carousel_gap,
  peek: {
    before: 0,
    after: carousel_gap * 3,
  },
};

export { TREND_OPTIONS, CAROUSEL_OPTIONS };
