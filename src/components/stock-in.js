const getStockValues = (items) => {
	const stockInContainer = document.querySelector(".in-stock__container");

	items.forEach((item) => {
		const stockInElem = document.createElement("div");
		stockInElem.classList.add("in-stock__item");

		stockInElem.innerHTML = `
            <div class="in-stock__img">
               <img class="trailer-img" src="${item.imgSrc}" alt="trailer photo">
            </div>
            <div class="in-stock__item-title">
               <span>${item.title}</span>
            </div>
				<div class="in-stock__property-block">
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
				<div class="in-stock__item-cost">
				<span>Стоимость: ${item.cost} $</span>
				</div>
				<div class="in-stock__item-btns">
				<button class="in-stock__item-btn pdf">Скачать PDF</button>
				<button class="in-stock__item-btn learn">перейти</button>
				</div>
      `;
		stockInContainer.appendChild(stockInElem);
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


getStockValues(items);


document.addEventListener("DOMContentLoaded", function() {
	const target = document.getElementById('animate-title');

	if (!target) {
		console.error("Target element not found!");
		return;
	}

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('animate');
				observer.unobserve(entry.target); 
			}
		});
	}, {
		threshold: 0.1 
	});

	observer.observe(target);
});