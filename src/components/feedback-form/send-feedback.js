document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback__form');
  if (form) {
    form.addEventListener('submit', sendEmailToServer);
  }
});

async function sendEmailToServer(event) {
  event.preventDefault();

  const form = event.target;
  const formBtn = form.querySelector('.feedback__btn');
  const formSendResult = form.querySelector('.feedback__send-result');

  formSendResult.textContent = '';

  const formData = new FormData(form);
  const { name, email, phone, subject, message } = Object.fromEntries(formData.entries());

  // Обработка пробелов
  const processedData = {
    name: processSpaces(name),
    email: processSpaces(email),
    phone: processSpaces(phone),
    subject: processSpaces(subject),
    message: processSpaces(message)
  };

  try {
    formBtn.textContent = 'Отправка...';
    formBtn.disabled = true;

    const response = await fetch('/api/send-message', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(processedData)
    });

    if (response.ok) {
      const result = await response.json();
      formSendResult.textContent = result.message;
      formSendResult.style.color = 'black';
      form.reset();
    } else {
      throw new Error('Ошибка отправки');
    }
  } catch (error) {
    console.error(error);
    formSendResult.textContent = 'Произошла ошибка. Обращение не было отправлено. Пожалуйста, проверьте корректность введённых данных или обновите страницу и заполните информацию повторно. Если проблема не решится, свяжитесь с нами по телефону 8 800 505-44-34 или напишите в WhatsApp/Telegram.';
    formSendResult.style.color = 'red';
  } finally {
    formBtn.textContent = 'Отправить';
    formBtn.disabled = false;
  }
}

// Функция для обработки пробелов
function processSpaces(value) {
  // Удаление лишних пробелов и пробелов в начале и конце строки
  return value.replace(/\s+/g, ' ').trim();
}
