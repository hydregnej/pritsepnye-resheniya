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
      articleElement.classList.add('news-card');
      articleElement.classList.add('news-page__article');

      articleElement.innerHTML = `
        <img src="${article.imgSrc}" alt="Фото: ${article.title}" class="news-img">
        <div class="news-date">${article.date}</div>
        <h2 class="news-title">${article.title}</h2>
        <p class="news-text">${paragraphs}</p>

      
        <div class="news-buttons">
          <a href="/current-news?id=${index}" class="card-btn learn news-link">Читать далее</a>
        </div>

        
      `;
      newsContainer.appendChild(articleElement);
    });
  };

  showNews(newsData);
});