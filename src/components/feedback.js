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


// Ограничение ввода символом и ввод начинается с +7
document.addEventListener('DOMContentLoaded', () => {
  const phoneInput = document.getElementById('phone')
  
  phoneInput.addEventListener('input', (event) => {
    let value = phoneInput.value
    
    // Удаление всех символов кроме цифр
    value = value.replace(/\D/g, '')

    // Если первая цифра 8, заменяем ее на 7
    if (value.startsWith('8')) {
      value = value.substring(1)
    }

    // Если начинается не с 7, удаляем первую цифру
    if (value.startsWith('7')) {
      value = value.substring(1)
    }
    
    // Ограничение длины до 10 символов (без учета +7)
    if (value.length > 10) {
      value = value.substring(0, 10)
    }

    // Форматирование номера телефона в виде +7(999)999-99-99
    let formattedValue = '+7'
    if (value.length > 0) {
      formattedValue += '(' + value.substring(0, 3)
    }
    if (value.length >= 4) {
      formattedValue += ')' + value.substring(3, 6)
    }
    if (value.length >= 7) {
      formattedValue += '-' + value.substring(6, 8)
    }
    if (value.length >= 9) {
      formattedValue += '-' + value.substring(8, 10)
    }

    phoneInput.value = formattedValue
  })
  
  phoneInput.addEventListener('keypress', (event) => {
    // Разрешение ввода только цифр
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault()
    }
  })
})