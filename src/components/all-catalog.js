//Вывод данных для карточек с массива (далее с сервера) + переключение между табами

document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.catalog__options-list-item');
    const cardContainer = document.querySelector('.catalog__container');

    const showCatalog = (cards) => {
        cardContainer.innerHTML = '';

        cards.forEach((card) => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('catalog__card');
            
            cardElement.innerHTML = `
                <img src="${card.imgSrc}" alt="trailer photo" class="catalog__card-img">
                <div class="catalog__card-title">${card.title}</div>
                <div class="catalog__card-buttons">
                    <button class="card-btn pdf">Скачать PDF</button>
                    <button class="card-btn learn">перейти</button>
                </div>
            `;
            // cardElement.innerHTML = `
            //     <img src="${card.imgSrc}" alt="trailer photo" class="catalog__card-img">
            //     <div class="catalog__card-title">${card.title}</div>
            //     <div class="catalog__card-buttons">
            //         <button class="catalog__card-btn pdf">Скачать PDF</button>
            //         <button class="catalog__card-btn learn">перейти</button>
            //     </div>
            // `;
            
            cardContainer.appendChild(cardElement);
        });
    };

    showCatalog(catalogData.low);

    items.forEach(item => {
        item.addEventListener('click', () => {
            items.forEach(item => {
                item.classList.remove('js-catalog__options-list-item--active');
                item.classList.add('js-catalog__options-list-item--inactive');
            });

            item.classList.remove('js-catalog__options-list-item--inactive');
            item.classList.add('js-catalog__options-list-item--active');
            
            const tab = item.getAttribute('data-tab');
            showCatalog(catalogData[tab]);
        });
    });
});

//Массив с данными
const lowCards = [
	{
		imgSrc: "./image/semitrailer 9833-0000050.png",
		title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ ДТ 9833-0000050",
	},
	{
		imgSrc: "./image/semitrailer 9834-0000050.png",
		title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ ДТ 9834-0000050",
	},
	{
		imgSrc: "./image/semitrailer 9835-0000050.png",
		title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ 9835-0000050",
	},
	{
		imgSrc: "./image/semitrailer sliding 9833-0000050.png",
		title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ ДТ 9833-0000050 (раздвижной)",
	},
	{
		imgSrc: "./image/semitrailer sliding 9834-0000050.png",
		title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ ДТ 9834-0000050 (раздвижной)",
	},
];

const highCards = [
	{
		imgSrc: "./image/semitrailer 9833-0000060.png",
		title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ ДТ 9833-0000060",
	},
	{
		imgSrc: "./image/semitrailer 9834-0000060.png",
		title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ ДТ 9834-0000060",
	},
	{
		imgSrc: "./image/semitrailer 9835-0000060.png",
		title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ 9835-0000060",
	},
	{
		imgSrc: "./image/semitrailer sliding 9833-0000060.png",
		title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ ДТ 9833-0000060 (раздвижной)",
	},
	{
		imgSrc: "./image/semitrailer sliding 9834-0000060.png",
		title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ ДТ 9834-0000060 (раздвижной)",
	},
];

const boardCards = [
	{
		imgSrc: "./image/semitrailer 9833-0000070.png",
		title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ ДТ 9833-0000070",
	},
	{
		imgSrc: "./image/semitrailer 9834-0000070.png",
		title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ ДТ 9834-0000070",
	},
];

const chassisCards = [
	{
		imgSrc: "./image/semitrailer 9833-0000020.png",
		title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ ДТ 9833-0000020",
	},
];

const catalogData = {
	low: lowCards,
	high: highCards,
	board: boardCards,
	chassis: chassisCards
};