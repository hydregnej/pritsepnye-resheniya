import catalogData from './catalog-data.js';

document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.catalog__options-list-item');
  const cardContainer = document.querySelector('.catalog__container');

  const showCatalog = (cards, category) => {
    cardContainer.innerHTML = '';

    cards.forEach((card, index) => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('catalog__card');

      cardElement.innerHTML = `
                <img src="${card.imgSrc}" alt="trailer photo" class="catalog__card-img">
                <div class="catalog__card-title">${card.title}</div>
                <div class="catalog__card-buttons">
                    <button class="card-btn pdf">Скачать PDF</button>
                    <a href="./product.html?category=${category}&id=${index}" class="card-btn learn">перейти</a>
                </div>
            `;
      cardContainer.appendChild(cardElement);
    });
  };

  const updateActiveTab = (hash) => {
    items.forEach(item => {
      if (item.getAttribute('data-tab') === hash) {
        item.classList.remove('js-catalog__options-list-item--inactive');
        item.classList.add('js-catalog__options-list-item--active');
        showCatalog(catalogData[hash], hash);
      } else {
        item.classList.remove('js-catalog__options-list-item--active');
        item.classList.add('js-catalog__options-list-item--inactive');
      }
    });
  };

  const hash = window.location.hash.substring(1) || 'low';
  updateActiveTab(hash);

  items.forEach(item => {
    item.addEventListener('click', () => {
      const tab = item.getAttribute('data-tab');
      window.location.hash = tab;
      updateActiveTab(tab);
    });
  });
});
