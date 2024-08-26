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