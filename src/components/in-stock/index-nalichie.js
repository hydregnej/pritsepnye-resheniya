import catalogData from '../data/data-product';

document.addEventListener('DOMContentLoaded', function () {
  const getAvailabilityValues = (items) => {
    const availabilityContainer = document.querySelector(".availability__container");

    // Функция для извлечения части до слэша и удаления текста в скобках
    // const cleanValue = (value) => {
    //   // Разделяем строку по слэшу и берем первую часть
    //   let [mainPart] = value.split(' | ');
    //   // Удаляем текст в скобках
    //   return mainPart.replace(/\s*\(.*?\)/, '').trim();
    // };

    items.forEach(({ imgSrc, title, pdf, price, maximumLoadWeight, workingPlatformLength, selfWeight, platformWidth, suspension, ramps }, index) => {
      const availabilityElem = document.createElement("div");
      availabilityElem.classList.add("availability__item");

      availabilityElem.innerHTML = `
        <img class="trailer-img" src="${imgSrc}" alt="Фото: ${title}">

        <div class="availability__item-block">

          <div class="availability__item-title">
            <span>${title}</span>
          </div>

          <div class="availability__property-block">

            <ul class="property-list__name">
              <li class="property-list__text property-list__transported-weight">Грузоподъёмность <span class="property-list__red-line"></span></li>
              <li class="property-list__text property-list__self-weight">Собственный вес <span class="property-list__red-line"></span></li>
              <li class="property-list__text property-list__platform-dimensions">Длина платформы <span class="property-list__red-line"></span></li>
              <li class="property-list__text property-list__axle-load">Ширина платформы <span class="property-list__red-line"></span></li>
            </ul>

            <ul class="property-list__value">
              <li class="property-list__text property-list__transported-weight property-list__text_value">${maximumLoadWeight}</li>
              <li class="property-list__text property-list__self-weight property-list__text_value">${selfWeight}</li>
              <li class="property-list__text property-list__platform-dimensions property-list__text_value">${workingPlatformLength}</li>
              <li class="property-list__text property-list__axle-load property-list__text_value">${platformWidth}</li>
            </ul>
          </div>

          <div class="availability__item-btns">

            <a href="./pdf/${pdf}.pdf" class="card-btn pdf" target="blank">Открыть PDF</a>

            <ul class="availability__price">
              <li class="availability__price-item">Стоимость:</span></li>
              <li class="availability__price-item availability__price-item_bold"> ${price} ₽</li>
            </ul> 

          </div>
            
          <div class="availability__item-btns-2">
            <a href="./pdf/${pdf}.pdf" class="card-btn pdf pdf__hidden" target="blank">Открыть PDF</a>
            <a href="/product?category=availability&id=${index}" class="card-btn learn card-btn__availability">подробнее</a>
           </div>

        </div>
      `;

      availabilityContainer.appendChild(availabilityElem);
    });
  };

  getAvailabilityValues(catalogData.availability);
});
