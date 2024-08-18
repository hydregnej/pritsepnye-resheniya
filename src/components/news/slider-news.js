// const getNewsValues = (elems) => {
//   const newsContainer = document.querySelector(".news-swiper-wrapper");

//   elems.forEach((elem) => {
//     const newsElem = document.createElement("div")
//     newsElem.classList.add("swiper-slide")
//     newsElem.classList.add("news-swiper-slide")

//     newsElem.innerHTML = `
//       <div class="news__img">
//         <img class="news-img" src="${elem.img}" alt="photo news">
//       </div>
//       <div class="news__date">
//         <span>${elem.date}</span>
//       </div>
//       <div class="news__text">
//         <p>${elem.text}</p>
//       </div>
//       <button class="news__btn-more"><a class="news__btn-more-link" href="/current-news">Подробнее</a></button>
//     `;
//     newsContainer.appendChild(newsElem);
//   });
// };

// const elems = [
//   {
//     img: "./image/news-example-img.png",
//     date: "5 марта 2023",
//     text: "Новая модель прицепа от компании XYZ: еще более надежная и функциональная!",
//   },
//   {
//     img: "./image/news-example-img1.png",
//     date: "4 марта 2023",
//     text: "Увеличение производственных мощностей компании XYZ: новые возможности для заказчиков!",
//   },
//   {
//     img: "./image/news-example-img.png",
//     date: "3 марта 2023",
//     text: "Новая модель прицепа от компании XYZ: еще более надежная и функциональная!",
//   },
//   {
//     img: "./image/news-example-img1.png",
//     date: "2 марта 2023",
//     text: "Увеличение производственных мощностей компании XYZ: новые возможности для заказчиков!",
//   },
//   {
//     img: "./image/news-example-img.png",
//     date: "1 марта 2023",
//     text: "Новая модель прицепа от компании XYZ: еще более надежная и функциональная!",
//   },
// ];

// getNewsValues(elems);

// const newsSwiper = new Swiper('.news-swiper', {
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