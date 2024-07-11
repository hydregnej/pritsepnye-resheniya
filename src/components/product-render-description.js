document.addEventListener('DOMContentLoaded', () => {
  const titles = document.querySelectorAll('.product-info__title');
  const descriptions = document.querySelectorAll('.product-info__description');

  titles.forEach((title, index) => {
      title.addEventListener('click', () => {
          // Удаляем класс 'product-info__title_active' у всех заголовков
          titles.forEach(t => t.classList.remove('product-info__title_active'));
          // Удаляем класс 'product-info__description-active' у всех описаний
          descriptions.forEach(d => d.classList.remove('product-info__description-active'));

          // Добавляем класс 'product-info__title_active' к кликнутому заголовку
          title.classList.add('product-info__title_active');
          // Добавляем класс 'product-info__description-active' только к соответствующему описанию
          descriptions[index].classList.add('product-info__description-active');
      });
  });
});