document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookie-banner');
  const acceptButton = document.getElementById('accept-cookies');

  // Проверка, принят ли куки
  if (!localStorage.getItem('cookiesAccepted')) {
      banner.style.display = 'flex';
  }

  // Обработчик клика по кнопке "Принять"
  acceptButton.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      banner.style.display = 'none';
  });

  // Очистка данных (для демонстрации, обычно это может быть кнопка в настройках пользователя)
  // Пример очистки данных
  document.getElementById('clear-cookies').addEventListener('click', () => {
      localStorage.removeItem('cookiesAccepted');
      location.reload(); // Перезагрузка страницы для повторного показа поп-апа
  });
});