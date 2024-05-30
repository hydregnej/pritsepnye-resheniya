//Анимация полоски под заголовком
document.addEventListener("DOMContentLoaded", function () {
  const target = document.querySelector(".feedback__h2");

  if (!target) {
    console.error("Target element not found!");
    return;
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("Element is intersecting");
        entry.target.classList.add('animate-form');
        observer.unobserve(entry.target);
      } else {
        console.log("Element is not intersecting");
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(target);
});

//Отправка данных из формы на сервер
document.querySelector(".feedback__form").addEventListener("submit", async function (event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  try {
    //НЕ ЗАБУДЬ ВСТАВИТЬ ССЫЛКУ НА СЕРВЕР
    const response = await fetch('', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Ошибка сети');
    }

    const result = await response.json();
    //НЕ ЗАБУДЬ ДОБАВИТЬ МОДАЛЬНОЕ ОКНО ПРИ УСПЕШНОМ ОТПРАВЛЕНИИ
    form.reset();
  } catch (error) {
    console.error('Ошибка отправки формы:', error);
    alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
  }
});