gsap.fromTo(
  '.js-fade-in-down',
  {
    y: -20,
    x: -10,
    opacity: 0,
  },
  {
    y: 0,
    x: 0,
    opacity: 1,
    duration: 1,
  }
);

gsap.fromTo(
  '.js-fade-in-up',
  {
    y: 20,
    x: 10,
    opacity: 0,
  },
  {
    y: 0,
    x: 0,
    opacity: 1,
    duration: 1,
  }
);

gsap.fromTo(
  '.js-fade-in-right',
  {
    x: -30,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1.2,
  }
);

gsap.fromTo('.js-fade-in', { opacity: 0 }, { opacity: 1, duration: 3 });
