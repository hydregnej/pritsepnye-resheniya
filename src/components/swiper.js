  // const heroSwiper = new Swiper('.hero-swiper', {
  //   slidesPerView: 1,
  //   loop: true,
  //   speed: 1500,
  //   easing: "ease-in-out",
  //   pagination: {
  //     el: '.hero-swiper-pagination',
  //     clickable: true,
  //   },
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false,
  //     waitForTransition: true,
  //   },
  // });

  // const getNewsValues = (elems) => {
  //   const newsContainer = document.querySelector(".news-swiper-wrapper");

  //   elems.forEach((elem) => {
  //     const newsElem = document.createElement("div");
  //     newsElem.classList.add("news-swiper-slide");

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
  //       <button class="news__btn-more"><a href="./current-news.html">Подробнее</a></button>
  //     `;
  //     newsContainer.appendChild(newsElem);
  //   });

  //   const swiperNews = new Swiper('.news-swiper', {
  //     slidesPerView: 3,
  //     spaceBetween: 20,
  //     loop: true,
  //     speed: 800,
  //     easing: "ease-in-out",
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //   });
  // };

  // const elems = [
  //   {
  //     img: "./img/news-example-img.png",
  //     date: "5 марта 2023",
  //     text: "Новая модель прицепа от компании XYZ: еще более надежная и функциональная!",
  //   },
  //   {
  //     img: "./img/news-example-img1.png",
  //     date: "4 марта 2023",
  //     text: "Увеличение производственных мощностей компании XYZ: новые возможности для заказчиков!",
  //   },
  //   {
  //     img: "./img/news-example-img.png",
  //     date: "3 марта 2023",
  //     text: "Новая модель прицепа от компании XYZ: еще более надежная и функциональная!",
  //   },
  //   {
  //     img: "./img/news-example-img1.png",
  //     date: "2 марта 2023",
  //     text: "Увеличение производственных мощностей компании XYZ: новые возможности для заказчиков!",
  //   },
  //   {
  //     img: "./img/news-example-img.png",
  //     date: "1 марта 2023",
  //     text: "Новая модель прицепа от компании XYZ: еще более надежная и функциональная!",
  //   },
  // ];

  // getNewsValues(elems);

