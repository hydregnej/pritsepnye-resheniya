document.addEventListener('DOMContentLoaded', () => {
  const phoneInput = document.getElementById('phone');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  
  phoneInput.addEventListener('input', () => {
    let value = phoneInput.value;
    
    // Удаление всех символов кроме цифр
    value = value.replace(/\D/g, '');

    // Если первая цифра 8, заменяем ее на 7
    if (value.startsWith('8')) {
      value = value.substring(1);
    }

    // Если начинается не с 7, удаляем первую цифру
    if (value.startsWith('7')) {
      value = value.substring(1);
    }
    
    // Ограничение длины до 10 символов (без учета +7)
    if (value.length > 10) {
      value = value.substring(0, 10);
    }

    // Форматирование номера телефона в виде +7(999)999-99-99
    let formattedValue = '+7';
    if (value.length > 0) {
      formattedValue += '(' + value.substring(0, 3);
    }
    if (value.length >= 4) {
      formattedValue += ')' + value.substring(3, 6);
    }
    if (value.length >= 7) {
      formattedValue += '-' + value.substring(6, 8);
    }
    if (value.length >= 9) {
      formattedValue += '-' + value.substring(8, 10);
    }

    phoneInput.value = formattedValue;
  });
  
  phoneInput.addEventListener('keypress', (event) => {
    // Разрешение ввода только цифр
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  });

  nameInput.addEventListener('input', () => {
    let value = nameInput.value;
    
    // Ограничение ввода символами, включая пробелы и дефисы
    value = value.replace(/[^a-zA-Zа-яА-ЯёЁ\s\-]/g, '');

    // Установка ограничения на длину имени
    if (value.length > 50) {
      value = value.substring(0, 50);
    }

    nameInput.value = value;
  });

  emailInput.addEventListener('input', () => {
    let value = emailInput.value.trim();
    
    // Простейшая валидация email-адреса
    if (!isValidEmail(value)) {
      // Не валидный email, можно показать сообщение об ошибке или изменить стиль поля
      emailInput.style.border = '2px solid red';
    } else {
      emailInput.style.border = ''; // Вернуть обычную рамку, если email валидный
    }
  });

  emailInput.addEventListener('keypress', (event) => {
    // Пример ограничения на ввод только определенных символов
    if (!/[a-zA-Z0-9@._-]/.test(event.key)) {
      event.preventDefault();
    }
  });

  // Функция для проверки валидности email
  function isValidEmail(email) {
    // Простейшая проверка наличия @ и .
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
