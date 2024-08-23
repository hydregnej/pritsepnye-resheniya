import newsData from '../data/data-news';

document.addEventListener('DOMContentLoaded', function () {
  const newsContainer = document.querySelector('.news-page__container');

  const showNews = (articles) => {
    newsContainer.innerHTML = '';

    articles.forEach((article, index) => {
      const paragraphs = article.content
      .split('# #')
      .map(paragraph => paragraph.trim())
      .filter(paragraph => paragraph.length > 0) // Удаление пустых строк
      .map(paragraph => paragraph.replace(/^#\s*/, '').replace(/\s*#$/, '')) // Удаление начальных и конечных #
      .join('');

      const articleElement = document.createElement('div');
      articleElement.classList.add('news-page__article');

      articleElement.innerHTML = `
        <img src="${article.imgSrc}" alt="Фото: ${article.title}" class="news-page__article-img">
        <div class="news-page__article-date">${article.date}</div>
        <h2 class="news-page__article-title">${article.title}</h2>
        <p class="news-page__article-text">${paragraphs}</p>

      
        <div class="news-page__article-buttons">
          <a href="/current-news?id=${index}" class="card-btn learn news-page__article-link">Читать далее</a>
        </div>

        
      `;
      newsContainer.appendChild(articleElement);
    });
  };

  showNews(newsData);
});



// import newsData from '../data/data-news';

// const getNewsValues = (elems) => {
// 	const newsPageContainer = document.querySelector(".news-page__container");

// 	elems.forEach((elem) => {
// 		const newsElem = document.createElement("div");
// 		newsElem.classList.add("news-page__item");

// 		newsElem.innerHTML = `
//          <div class="news__img">
//          <img class="news-img" src="${elem.img}" alt="photo news">
//          </div>
//          <div class="news__date">
//          <span>${elem.date}</span>
//          </div>
//          <div class="news__text">
//          <p>${elem.text}</p>
//          </div>
//          <button class="news__btn-more"><a href="/current-news">Подробнее</a></button>
//          `;
// 		newsPageContainer.appendChild(newsElem);
// 	});
// 	newItems = document.querySelectorAll(".news-page__item");
// };

// // Пример данных "новости"
// const elems = [
// 	{
// 		img: "./img/news-example-img.png",
// 		date: "5 марта 2023",
// 		text: "Новая модель прицепа от компании XYZ: еще более надежная и функциональная!",
// 	},
// 	{
// 		img: "./img/news-example-img1.png",
// 		date: "4 марта 2023",
// 		text: "Увеличение производственных мощностей компании XYZ: новые возможности для заказчиков!",
// 	},
// 	{
// 		img: "./img/news-example-img.png",
// 		date: "3 марта 2023",
// 		text: "Новая модель прицепа от компании XYZ: еще более надежная и функциональная!",
// 	},
// 	{
// 		img: "./img/news-example-img1.png",
// 		date: "2 марта 2023",
// 		text: "Увеличение производственных мощностей компании XYZ: новые возможности для заказчиков!",
// 	},
// 	{
// 		img: "./img/news-example-img.png",
// 		date: "1 марта 2023",
// 		text: "Новая модель прицепа от компании XYZ: еще более надежная и функциональная!",
// 	},
// 	{
// 		img: "./img/news-example-img.png",
// 		date: "5 марта 2023",
// 		text: "Новая модель прицепа от компании XYZ: еще более надежная и функциональная!",
// 	},
// 	{
// 		img: "./img/news-example-img1.png",
// 		date: "4 марта 2023",
// 		text: "Увеличение производственных мощностей компании XYZ: новые возможности для заказчиков!",
// 	},
// 	{
// 		img: "./img/news-example-img.png",
// 		date: "3 марта 2023",
// 		text: "Новая модель прицепа от компании XYZ: еще более надежная и функциональная!",
// 	},
// 	{
// 		img: "./img/news-example-img1.png",
// 		date: "2 марта 2023",
// 		text: "Увеличение производственных мощностей компании XYZ: новые возможности для заказчиков!",
// 	},
// 	{
// 		img: "./img/news-example-img.png",
// 		date: "1 марта 2023",
// 		text: "Новая модель прицепа от компании XYZ: еще более надежная и функциональная!",
// 	},
// ];

// getNewsValues(elems);