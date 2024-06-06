const getAvailabilityValues = (items) => {
	const availabilityContainer = document.querySelector(".availability__container");

	items.forEach((item) => {
		const availabilityElem = document.createElement("div");
		availabilityElem.classList.add("availability__item");

		availabilityElem.innerHTML = `
            <div class="availability__img">
               <img class="trailer-img" src="${item.imgSrc}" alt="trailer photo">
            </div>
            <div class="availability__item-title">
               <span>${item.title}</span>
            </div>
				<div class="availability__property-block">
				<ul class="property-list__name">
				<li class="property-list__transported-weight">Вес перевозимого груза <span class="property-list__red-line"></li>
				<li class="property-list__self-weight">Собственный вес <span class="property-list__red-line"></li>
				<li class="property-list__platform-dimensions">Габариты платформы <span class="property-list__red-line"></li>
				<li class="property-list__axle-load">Нагрузка на ось <span class="property-list__red-line"></li>
				</ul>

				<ul class="property-list__value">
				<li class="property-list__transported-weight">${item.transportedWeight}</li>
				<li class="property-list__self-weight">${item.selfWeight}</li>
				<li class="property-list__platform-dimensions">${item.platformDimensions}</li>
				<li class="property-list__axle-load">${item.axleLoad}</li>
				</ul>
				</div>
				<div class="availability__item-cost">
				<span>Стоимость: ${item.cost} $</span>
				</div>
				<div class="availability__item-btns">
				<button class="availability__item-btn pdf">Скачать PDF</button>
				<button class="availability__item-btn learn">перейти</button>
				</div>
      `;
		availabilityContainer.appendChild(availabilityElem);
	});
};

// Пример данных "в наличии"
const items = [
	{
		imgSrc: "./image/image1.png",
		title: "Прицеп 1",
		transportedWeight: "72200 кг",
		selfWeight: "16000 кг",
		platformDimensions: "10900 мм",
		axleLoad: "11000 кг",
		cost: "999 000",
	},
	{
		imgSrc: "./image/image2.png",
		title: "Прицеп 2",
		transportedWeight: "70000 кг",
		selfWeight: "15500 кг",
		platformDimensions: "10300 мм",
		axleLoad: "10500 кг",
		cost: "999 000",
	},
	{
		imgSrc: "./image/image3.png",
		title: "Прицеп 3",
		transportedWeight: "60000 кг",
		selfWeight: "14300 кг",
		platformDimensions: "10800 мм",
		axleLoad: "10500 кг",
		cost: "999 000",
	},
];

getAvailabilityValues(items)