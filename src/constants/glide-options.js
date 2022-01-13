const TREND_OPTIONS = {
  perView: 1,
  autoplay: 7000,
  gap: 0,
};

const carousel_gap = {
  sm: 20,
  md: 30,
  lg: 50,
};

const CAROUSEL_OPTIONS = {
  perView: 5,
  autoplay: 7000,
  gap: carousel_gap.lg,
  peek: {
    before: 0,
    after: carousel_gap.lg * 3,
  },
  breakpoints: {
    768: {
      perView: 2,
      gap: carousel_gap.sm,
      peek: {
        before: 0,
        after: carousel_gap.sm * 3,
      },
    },
    1024: {
      perView: 3,
      gap: carousel_gap.md,
      peek: {
        before: 0,
        after: carousel_gap.md * 5,
      },
    },
  },
};

export { TREND_OPTIONS, CAROUSEL_OPTIONS };
