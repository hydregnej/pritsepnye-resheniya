const getAvailabilityValues = (items) => {
  const availabilityContainer = document.querySelector(".availability__container");

  items.forEach((item) => {
    const availabilityElem = document.createElement("div");
    availabilityElem.classList.add("availability__item");

    // availabilityElem.innerHTML = `
    //         <div class="availability__img">
    //            <img class="trailer-img" src="${item.imgSrc}" alt="trailer photo">
    //         </div>
    //         <div class="availability__item-title">
    //            <span>${item.title}</span>
    //         </div>
    // 		<div class="availability__property-block">
    // 		<ul class="property-list__name">
    // 		<li class="property-list__transported-weight">Вес перевозимого груза <span class="property-list__red-line"></li>
    // 		<li class="property-list__self-weight">Собственный вес <span class="property-list__red-line"></li>
    // 		<li class="property-list__platform-dimensions">Длина рабочей платформы <span class="property-list__red-line"></li>
    // 		<li class="property-list__axle-load">Нагрузка на оси <span class="property-list__red-line"></li>
    // 		</ul>

    // 		<ul class="property-list__value">
    // 		<li class="property-list__transported-weight">${item.transportedWeight}</li>
    // 		<li class="property-list__self-weight">${item.selfWeight}</li>
    // 		<li class="property-list__platform-dimensions">${item.platformDimensions}</li>
    // 		<li class="property-list__axle-load">${item.axleLoad}</li>
    // 		</ul>
    // 		</div>
    // 		<div class="availability__item-btns">
    // 		<button class="availability__item-btn pdf">Скачать PDF</button>
    // 		<button class="availability__item-btn learn">перейти</button>
    // 		</div>
    //   `;
    availabilityElem.innerHTML = `
               <img class="trailer-img" src="${item.imgSrc}" alt="trailer photo">
            <div class="availability__item-block">
              <div class="availability__item-title">
                 <span>${item.title}</span>
              </div>
                      <div class="availability__property-block">
                      <ul class="property-list__name">
                      <li class="property-list__text property-list__transported-weight">Вес перевозимого груза <span class="property-list__red-line"></li>
                      <li class="property-list__text property-list__self-weight">Собственный вес <span class="property-list__red-line"></li>
                      <li class="property-list__text property-list__platform-dimensions">Длина рабочей платформы <span class="property-list__red-line"></li>
                      <li class="property-list__text property-list__axle-load">Нагрузка на оси <span class="property-list__red-line"></li>
                      </ul>
              
                      <ul class="property-list__value">
                      <li class="property-list__text property-list__transported-weight">${item.transportedWeight}</li>
                      <li class="property-list__text property-list__self-weight">${item.selfWeight}</li>
                      <li class="property-list__text property-list__platform-dimensions">${item.platformDimensions}</li>
                      <li class="property-list__text property-list__axle-load">${item.axleLoad}</li>
                      </ul>
                      </div>
                      <div class="availability__item-btns">
                      <button class="card-btn pdf">Скачать PDF</button>
                      <button class="card-btn learn">перейти</button>
                      </div>
            </div>
      `;
    availabilityContainer.appendChild(availabilityElem);
  });
};

// Пример данных "в наличии"
const items = [
  {
    imgSrc: "./imageбез фона/semitrailer 9833-0000060-05.png",
    title: "Полуприцеп-тяжеловоз ДТ 9833-0000060-05",
    transportedWeight: "40 000 кг",
    selfWeight: "10 000 кг",
    platformDimensions: "10 300 мм",
    axleLoad: "33 000 кг",
  },
  {
    imgSrc: "./imageбез фона/semitrailer 9835-0000050-03.png",
    title: "Полуприцеп-тяжеловоз 9835-0000050-03",
    transportedWeight: "60 000 кг",
    selfWeight: "15 000 кг",
    platformDimensions: "18 150 мм",
    axleLoad: "55 000 кг",
  },
];

getAvailabilityValues(items)