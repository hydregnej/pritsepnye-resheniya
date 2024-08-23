// файл current-news.js

import newsData from '../data/data-news';

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const newsId = urlParams.get('id');

  if (newsId) {
    const headTitle = document.querySelector('title');
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');

    const newsItem = newsData[newsId];

    if (newsItem) {
      const { additionalImages, date, title, content } = newsItem;

      headTitle.innerText = `Новости - ${title}`;

      metaDescription.name = 'description';
      metaDescription.content = `${title} - ${content.substring(0, 150)}...`;
      if (!document.querySelector('meta[name="description"]')) {
        document.head.appendChild(metaDescription);
      }

      const newsDetailsContainer = document.getElementById('news-details');

      // Создание HTML для изображений
      const additionalImagesHTML = additionalImages.map(src => `
        <div class="swiper-slide current-news__swiper-slide">
          <img src="${src}" alt="${title}" class="swiper-slide-img current-news__swiper-slide-img">
        </div>
      `).join('');

      // Разделение контента на параграфы и удаление начальных и конечных символов #
      const paragraphs = content
        .split('# #')
        .map(paragraph => paragraph.trim())
        .filter(paragraph => paragraph.length > 0) // Удаление пустых строк
        .map(paragraph => paragraph.replace(/^#\s*/, '').replace(/\s*#$/, '')) // Удаление начальных и конечных #
        .map(paragraph => `<p>${paragraph}</p>`)
        .join('');
        
      const contentElement = document.createElement('div');

      contentElement.innerHTML = `
        <div class="main__breadcrumbs">
          <a href="/">Главная </a>
          <span> / </span>
          <a href="/news">Новости</a>
          <span> / </span>
          <span>Тема: ${title}</span>
        </div>

        <div class="container current-news__container">
          <div class="current-news-title-block">
            <h1 class="current-news-title-block__title">${title}</h1>
            <p class="current-news-title-block__date">${date}</p>
          </div>

          <div class="swiper-container current-news-gallery">
            <div class="swiper-wrapper current-swiper-wrapper">
              ${additionalImagesHTML}
            </div>
          </div>
          
          <div class="current-news__content">
            ${paragraphs}
          </div>
        </div>
      `;

      newsDetailsContainer.prepend(contentElement);

      new Swiper('.current-news-gallery', {
        spaceBetween: 10,
        freeMode: true,
        slidesPerView: 1.5,
        breakpoints: {
          690: {
            slidesPerView: 2.5,
          },
        },
      });
      

    } else {
      const newsDetailsContainer = document.getElementById('news-details');
      newsDetailsContainer.innerHTML = '<p>Новость не найдена</p>';
    }

  } else {
    const newsDetailsContainer = document.getElementById('news-details');
    newsDetailsContainer.innerHTML = '<p>Новость не найдена</p>';
  }
});




/////////////////////////////////////////////GPT

// import newsData from '../data/data-news';

// document.addEventListener('DOMContentLoaded', () => {
//   const urlParams = new URLSearchParams(window.location.search);
//   const newsId = urlParams.get('id');  // Извлекаем только id новости из URL

//   const canonicalLink = document.createElement('link');
//   canonicalLink.rel = 'canonical';
//   canonicalLink.href = `https://pricepresh74.ru/news?id=${newsId}`;
//   document.head.appendChild(canonicalLink);

//   if (newsId) {
//     const headTitle = document.querySelector('title');
//     const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');

//     // Получаем данные о конкретной новости по id
//     const { additionalImages, date, title, content,  } = newsData[newsId];  // newsId используем как индекс

//     headTitle.innerText = `Новости - ${title}`;

//     metaDescription.name = 'description';
//     if (!document.querySelector('meta[name="description"]')) {
//       document.head.appendChild(metaDescription);
//     }

//     const newsDetailsContainer = document.getElementById('news-details');

//     // Создание HTML для слайдов галереи изображений новости
//     const gallerySlidesHTML = additionalImages.map(src => `
//       <div class="swiper-slide">
//         <img src="${src}" alt="Новость: ${title}" class="swiper-slide-img">
//       </div>
//     `).join('');

//     // Создаем элемент для содержимого страницы новости
//     const contentElement = document.createElement('div');

//     contentElement.innerHTML = `
//       <div class="main-container">
//         <div class="main__breadcrumbs">
//           <a href="/">Главная </a>
//           <span> / </span>
//           <a href="/news">Новости</a>
//           <span> / </span>
//           <span>${title}</span>
//         </div>
//         <section class="news">
//           <div class="container news__container">
//             <div class="news__title-container">
//               <h1 class="news__title">${title}</h1>
//             </div>
//             <div class="swiper-container news-gallery">
//               <div class="swiper-wrapper">
//                 ${gallerySlidesHTML}
//               </div>
//               <div class="swiper-button-next"></div>
//               <div class="swiper-button-prev"></div>
//             </div>
//             <div class="news-content">
//               <div class="news-body">
//                 ${content}
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     `;

//     newsDetailsContainer.prepend(contentElement);

//     // Инициализация Swiper.js после обновления DOM
//     const newsGallery = new Swiper('.news-gallery', {
//       spaceBetween: 10,
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });

//   } else {
//     const newsDetailsContainer = document.getElementById('news-details');
//     newsDetailsContainer.innerHTML = '<p>Новость не найдена</p>';
//   }
// });

/////////////////////////////////////////////GPT























// document.addEventListener('DOMContentLoaded', () => {
//   const getNewsValues = (elems) => {
//     const newsContainer = document.querySelector(".current-news__container");


//     elems.forEach((elem) => {
//       const newsElem = document.createElement("div");
//       newsElem.classList.add("current-news__item");

//       newsElem.innerHTML = `
// 					<div class="current-news__title">${elem.title}</div>
// 					<div class="current-news__img-block"><img class="current-news__img" src="${elem.img}" alt="News Image"></div>
// 					<div class="current-news__text">${elem.text}</div>
// 			   `;
//       newsContainer.appendChild(newsElem);
//     });
//   };

//   const elems = [
//     {
//       title: "Новая модель прицепа от компании XYZ:еще более надежная и функциональная!",
//       img: "./img/current-news-img.png",
//       text: `
// Компания XYZ представила новую модель прицепа, отличающуюся повышенной надёжностью и функциональностью.
// Компания XYZ, специализирующаяся на производстве прицепов, недавно представила свою новую разработку — прицеп модели XYZ-N.
// Эта модель отличается улучшенной конструкцией, обеспечивающей повышенную грузоподъёмность и безопасность.
// Основные изменения коснулись рамы прицепа. Она стала более прочной и устойчивой к коррозии благодаря использованию оцинкованной стали высокого качества.
// Кроме того, были улучшены крепления колёс, что обеспечивает их надёжную фиксацию и предотвращает возможные проблемы с балансировкой.
// Также был усовершенствован механизм сцепки прицепа с автомобилем. Он стал более удобным и безопасным, что облегчает процесс присоединения и отсоединения прицепа.
// Внутри прицепа также произошли изменения. Были добавлены новые отсеки и полки для хранения грузов, а также улучшено освещение.
// Теперь внутри прицепа стало ещё удобнее работать и перемещаться.
// Новая модель прицепа от компании XYZ уже доступна для заказа. Стоимость прицепа начинается от 10 000 000 рублей.
// 			`,
//     },
//   ];

//   getNewsValues(elems);
// });