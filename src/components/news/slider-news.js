// const getSliderNewsValues = (elems) => {
//   const sliderNewsContainer = document.querySelector(".slider-news-swiper-wrapper");

//   elems.forEach((elem) => {
//     const sliderNewsElem = document.createElement("div");
//     sliderNewsElem.classList.add("swiper-slide");
//     sliderNewsElem.classList.add("slider-news-swiper-slide");

//     sliderNewsElem.innerHTML = `
//       <div class="slider-news__img">
//         <img class="slider-news-img" src="${elem.img}" alt="photo news">
//       </div>
//       <div class="slider-news__date">
//         <span>${elem.date}</span>
//       </div>
//       <div class="slider-news__text">
//         <p>${elem.text}</p>
//       </div>
//       <button class="slider-news__btn-more">
//         <a class="slider-news__btn-more-link" href="/current-news">Подробнее</a>
//       </button>
//     `;
//     sliderNewsContainer.appendChild(sliderNewsElem);
//   });
// };

// const elems = [
//   // массив элементов
// ];

// getSliderNewsValues(elems);

// const sliderNewsSwiper = new Swiper('.slider-news-swiper', {
//   slidesPerView: 3,
//   spaceBetween: 20,
//   loop: true,
//   speed: 800,
//   easing: "ease-in-out",
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
