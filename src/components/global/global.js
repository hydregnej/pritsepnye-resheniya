document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookie-banner');
  const acceptButton = document.getElementById('accept-cookies');
  const expirationDays = 7; // Количество дней, через которое баннер снова появится

  // Функция для проверки, истек ли срок хранения
  const isCookieExpired = () => {
    const lastAccepted = localStorage.getItem('cookiesAcceptedDate');
    if (!lastAccepted) return true; // Если данных нет, считаем, что нужно показать баннер

    const now = new Date();
    const lastDate = new Date(lastAccepted);
    const daysPassed = (now - lastDate) / (1000 * 60 * 60 * 24); // Разница в днях

    return daysPassed > expirationDays;
  };

  // Проверка, нужно ли показывать баннер
  if (!localStorage.getItem('cookiesAccepted') || isCookieExpired()) {
    banner.style.display = 'flex';
  }

  // Обработчик клика по кнопке "Принять"
  acceptButton.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    localStorage.setItem('cookiesAcceptedDate', new Date().toISOString());
    banner.style.display = 'none';
  });
});
