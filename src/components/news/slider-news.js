import newsData from '../data/data-news.js';

document.addEventListener("DOMContentLoaded", () => {
  const swiperWrapper = document.querySelector('.slider-news__swiper-wrapper');

  if (newsData.length <= 3) {
    document.querySelector('.slider-news-swiper-button-prev').style.display = 'none'
    document.querySelector('.slider-news-swiper-button-next').style.display = 'none'
  }

  newsData.forEach((newsItem, index) => {
    const paragraphs = newsItem.content
      .split('# #')
      .map(paragraph => paragraph.trim())
      .filter(paragraph => paragraph.length > 0) // Удаление пустых строк
      .map(paragraph => paragraph.replace(/^#\s*/, '').replace(/\s*#$/, '')) // Удаление начальных и конечных #
      .join('');

    const slide = document.createElement('div');
    slide.classList.add('swiper-slide', 'slider-news__swiper-slide');

    slide.innerHTML = `
      <div class="news-card news-card__slider">
        <img src="${newsItem.imgSrc}" alt="Фото: ${newsItem.title}" class="news-img">
        <div class="news-date">${newsItem.date}</div>
        <h2 class="news-title">${newsItem.title}</h2>
        <p class="news-text">${paragraphs}</p>
        <div class="news-buttons">
          <a href="/current-news?id=${index}" class="card-btn learn news-link">Читать далее</a>
        </div>
      </div>
    `;

    swiperWrapper.appendChild(slide);
  });

  const swiper = new Swiper('.slider-news-swiper', {
    loop: true,
    navigation: {
      nextEl: '.slider-news-swiper-button-next',
      prevEl: '.slider-news-swiper-button-prev',
    },
    slidesPerView: 1.5,
    spaceBetween: 1,
    breakpoints: {
      490: {
        slidesPerView: 2.2,
        spaceBetween: 1,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 3,
      },
    },

  });

});
