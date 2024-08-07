document.addEventListener('DOMContentLoaded', () => {
  const getNewsValues = (elems) => {
    const newsContainer = document.querySelector(".current-news__container");


    elems.forEach((elem) => {
      const newsElem = document.createElement("div");
      newsElem.classList.add("current-news__item");

      newsElem.innerHTML = `
					<div class="current-news__title">${elem.title}</div>
					<div class="current-news__img-block"><img class="current-news__img" src="${elem.img}" alt="News Image"></div>
					<div class="current-news__text">${elem.text}</div>
			   `;
      newsContainer.appendChild(newsElem);
    });
  };

  const elems = [
    {
      title: "Новая модель прицепа от компании XYZ:еще более надежная и функциональная!",
      img: "./img/current-news-img.png",
      text: `
Компания XYZ представила новую модель прицепа, отличающуюся повышенной надёжностью и функциональностью. 
Компания XYZ, специализирующаяся на производстве прицепов, недавно представила свою новую разработку — прицеп модели XYZ-N. 
Эта модель отличается улучшенной конструкцией, обеспечивающей повышенную грузоподъёмность и безопасность. 
Основные изменения коснулись рамы прицепа. Она стала более прочной и устойчивой к коррозии благодаря использованию оцинкованной стали высокого качества. 
Кроме того, были улучшены крепления колёс, что обеспечивает их надёжную фиксацию и предотвращает возможные проблемы с балансировкой. 
Также был усовершенствован механизм сцепки прицепа с автомобилем. Он стал более удобным и безопасным, что облегчает процесс присоединения и отсоединения прицепа. 
Внутри прицепа также произошли изменения. Были добавлены новые отсеки и полки для хранения грузов, а также улучшено освещение. 
Теперь внутри прицепа стало ещё удобнее работать и перемещаться. 
Новая модель прицепа от компании XYZ уже доступна для заказа. Стоимость прицепа начинается от 10 000 000 рублей.
			`,
    },
  ];

  getNewsValues(elems);
});