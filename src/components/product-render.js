import catalogData from './catalog-data';

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');
  const productId = urlParams.get('id');

  if (category && productId) {

    const headTitle = document.querySelector('title')

    // const metaDescription = document.querySelector('meta[name="description"]')


    const { title, additionalImages, descriptionTitle, descriptionMain, descriptionOptional, maximumLoadWeight, workingPlatformLength, suspension, ramps } = catalogData[category][productId];

    headTitle.innerText = `${title}`

    //Это для метатегов, потом разобраться с ними
    // metaDescription.setAttribute()

    const productDetailsContainer = document.getElementById('product-details');

    // Создание HTML для слайдов основной галереи
    const mainSlidesHTML = additionalImages.map(src => `
            <div class="swiper-slide swiper-slide-top">
                <img src="${src}" alt="Полуприцеп Прицепные Решения: ${title}" class="swiper-slide-top-img">
            </div>
        `).join('');

    // Создание HTML для миниатюр
    const thumbsSlidesHTML = additionalImages.map(src => `
            <div class="swiper-slide">
                <img src="${src}" alt="Полуприце Прицепные Решения: ${title}" class="swiper-slide-bot-img">
            </div>
        `).join('');

    const mainDescriptionHTML = descriptionMain.map(text => `
          <p class="product-info__text-main-block">${text}</p>
      `).join('');

    const optionalDescriptionHTML = descriptionOptional.map(text => `
        <p class="product-info__text-main-block">${text}</p>
    `).join('');

    let match = title.match(/ДТ \d+-\d+/);
    let nameSemiTrailer = match ? match[0] : '';

    //
    const contentElement = document.createElement('div');

    contentElement.innerHTML = `
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


            <div class="product-info">

              <div class="product-info__all-titles">
                <p class="product-info__title product-info__title_active">ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</p>
                <p class="product-info__title">ОПИСАНИЕ</p>
              </div>
      
              <div class="product-info__description product-info__description-specifications product-info__description-active">
                <div class="product-info__description-block">
                  <p class="product-info__text product-info__text-main">Максимальный вес груза</p>
                  <p class="product-info__text-description">${maximumLoadWeight}</p>
                </div>
      
                <div class="product-info__description-block">
                  <p class="product-info__text product-info__text-main">Длина рабочей платформы</p>
                  <p class="product-info__text-description">${workingPlatformLength}</p>
                </div>
      
                <div class="product-info__description-block">
                  <p class="product-info__text product-info__text-main">Подвеска</p>
                  <p class="product-info__text-description">${suspension}</p>
                </div>
      
                <div class="product-info__description-block">
                  <p class="product-info__text product-info__text-main">Трапы</p>
                  <p class="product-info__text-description">${ramps}</p>
                </div>
      
              </div>

              <div class="product-info__description product-info__description-dop">
                <h2 class="product-info__description-title product-info__text-align-left">${descriptionTitle}</h2>
                <h3 class="product-info__text product-info__text-align-left"><strong>Основные характеристики Полуприцепа ${nameSemiTrailer}:<strong></h3>
                <div class="product-info__text product-info__text-align-left product-info__main-block">${mainDescriptionHTML}</div>

                <h3 class="product-info__text product-info__text-align-left"><strong>Дополнительные особенности Полуприцепа ${nameSemiTrailer}:<strong></h3>
                <div class="product-info__text product-info__text-align-left"> ${optionalDescriptionHTML}</div>

              </div>

            </div>           

          </div>
        </section>
      </div>
        `;


    productDetailsContainer.prepend(contentElement)
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
