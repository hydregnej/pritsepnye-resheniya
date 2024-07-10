import catalogData from './catalog-data';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const productId = urlParams.get('id');

    if (category && productId) {
        const { title, imgSrc, additionalImages } = catalogData[category][productId];

        const productDetailsContainer = document.getElementById('product-details');

        // Создание HTML для слайдов основной галереи
        const mainSlidesHTML = additionalImages.map(src => `
            <div class="swiper-slide swiper-slide-top">
                <img src="${src}" alt="Product Image" class="swiper-slide-top-img">
            </div>
        `).join('');

        // Создание HTML для миниатюр
        const thumbsSlidesHTML = additionalImages.map(src => `
            <div class="swiper-slide">
                <img src="${src}" alt="Thumbnail" class="swiper-slide-bot-img">
            </div>
        `).join('');

        productDetailsContainer.innerHTML = `
      <div class="main-container">

        <div class="main__breadcrumbs">
          <a href="./index.html">Главная </a>
          <span> / </span>
          <a href="./catalog.html">Каталог</a>
          <span> / </span>
          <span>${title}</span>
        </div>

        <section class="product">
          <div class="container product__container">

            <div class="product__title-container">
              <h1 class="product__title">${title}</h1>
            </div>

            <div class="availability">
              <p class="availability_text">В наличии</p>
            </div>

            <div class="swiper-container gallery-top">
              <div class="swiper-wrapper">
                ${mainSlidesHTML}
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>

            <div class="swiper-container gallery-thumbs">
              <div class="swiper-wrapper">
                ${thumbsSlidesHTML}
              </div>
            </div>

          </div>
        </section>
      </div>
        `;

        // Инициализация Swiper.js после обновления DOM
        const galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            slidesPerView: 5,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });

        const galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs,
            },
        });

    } else {
        const productDetailsContainer = document.getElementById('product-details');
        productDetailsContainer.innerHTML = '<p>Продукт не найден</p>';
    }
});
