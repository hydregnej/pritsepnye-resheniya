const getNewsValues = (elems) => {
	const newsPageContainer = document.querySelector(".news-page__container");

	elems.forEach((elem) => {
		const newsElem = document.createElement("div");
		newsElem.classList.add("news-page__item");

		newsElem.innerHTML = `
         <div class="news__img">
         <img class="news-img" src="${elem.img}" alt="photo news">
         </div>
         <div class="news__date">
         <span>${elem.date}</span>
         </div>
         <div class="news__text">
         <p>${elem.text}</p>
         </div>
         <button class="news__btn-more"><a href="./current-news.html">Подробнее</a></button>
         `;
		newsPageContainer.appendChild(newsElem);
	});
	newItems = document.querySelectorAll(".news-page__item");
};

// Пример данных "новости"
const elems = [
	{
		img: "./img/news-example-img.png",
		date: "5 марта 2023",
		text: "Новая модель прицепа от компании XYZ: еще более надежная и функциональная!",
	},
	{
		img: "./img/news-example-img1.png",
		date: "4 марта 2023",
		text: "Увеличение производственных мощностей компании XYZ: новые возможности для заказчиков!",
	},
	{
		img: "./img/news-example-img.png",
		date: "3 марта 2023",
		text: "Новая модель прицепа от компании XYZ: еще более надежная и функциональная!",
	},
	{
		img: "./img/news-example-img1.png",
		date: "2 марта 2023",
		text: "Увеличение производственных мощностей компании XYZ: новые возможности для заказчиков!",
	},
	{
		img: "./img/news-example-img.png",
		date: "1 марта 2023",
		text: "Новая модель прицепа от компании XYZ: еще более надежная и функциональная!",
	},
	{
		img: "./img/news-example-img.png",
		date: "5 марта 2023",
		text: "Новая модель прицепа от компании XYZ: еще более надежная и функциональная!",
	},
	{
		img: "./img/news-example-img1.png",
		date: "4 марта 2023",
		text: "Увеличение производственных мощностей компании XYZ: новые возможности для заказчиков!",
	},
	{
		img: "./img/news-example-img.png",
		date: "3 марта 2023",
		text: "Новая модель прицепа от компании XYZ: еще более надежная и функциональная!",
	},
	{
		img: "./img/news-example-img1.png",
		date: "2 марта 2023",
		text: "Увеличение производственных мощностей компании XYZ: новые возможности для заказчиков!",
	},
	{
		img: "./img/news-example-img.png",
		date: "1 марта 2023",
		text: "Новая модель прицепа от компании XYZ: еще более надежная и функциональная!",
	},
];

getNewsValues(elems);