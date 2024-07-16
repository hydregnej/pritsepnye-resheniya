const heroSwiper = new Swiper('.hero-swiper', {
  slidesPerView: 1,
  loop: true,
  speed: 1500,
  easing: "ease-in-out",
  pagination: {
    el: '.hero-swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    waitForTransition: true,
  },
});