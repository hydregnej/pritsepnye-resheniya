// const express = require('express');
// const fetch = require('node-fetch');
// const bodyParser = require('body-parser');
// const crypto = require('crypto');
// const helmet = require('helmet');
// const compression = require('compression');
// const rateLimit = require('express-rate-limit');
// const csurf = require('csurf');
// const redis = require('redis');
// const { body, validationResult } = require('express-validator');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 3000;

// const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
// const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
// const SECRET_KEY = process.env.SECRET_KEY;
// const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

// const redisClient = redis.createClient();

// // Проверка наличия всех необходимых переменных окружения
// if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID || !SECRET_KEY) {
//     console.error('Необходимые переменные окружения не установлены');
//     process.exit(1);
// }

// // Middleware
// app.use(helmet()); // Настройка заголовков безопасности
// app.use(compression()); // Сжатие данных
// app.use(bodyParser.json());
// app.use(csurf({ cookie: true })); // CSRF защита

// // Ограничение запросов
// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 минут
//     max: 100, // Максимум 100 запросов с одного IP
//     message: 'Слишком много запросов с вашего IP, попробуйте позже.'
// });
// app.use(limiter);

// // Шифрование данных
// const algorithm = 'aes-256-ctr';
// const iv = crypto.randomBytes(16);

// const encrypt = (text) => {
//     const cipher = crypto.createCipheriv(algorithm, Buffer.from(SECRET_KEY), iv);
//     const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
//     return iv.toString('hex') + ':' + encrypted.toString('hex');
// };

// const decrypt = (encryptedText) => {
//     const [ivText, encryptedTextBody] = encryptedText.split(':');
//     const decipher = crypto.createDecipheriv(algorithm, Buffer.from(SECRET_KEY), Buffer.from(ivText, 'hex'));
//     const decrypted = Buffer.concat([decipher.update(Buffer.from(encryptedTextBody, 'hex')), decipher.final()]);
//     return decrypted.toString();
// };

// // Валидация данных
// const validateInput = () => [
//     body('name').isString().notEmpty().withMessage('Имя обязательно'),
//     body('email').isEmail().withMessage('Неверный формат Email'),
//     body('phone').matches(/^\+?[0-9\s-]{7,15}$/).withMessage('Неверный формат телефона'),
//     body('pass').isString().notEmpty().withMessage('Пароль обязателен')
// ];

// app.post('/api/send-telegram', validateInput(), async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }

//     const { name, email, phone, pass } = req.body;
//     const text = `Заявка от ${name}!\nEmail: ${email}\nТелефон: ${phone}\nПаспортные данные: ${encrypt(pass)}`;

//     try {
//         const response = await fetch(API, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text })
//         });

//         if (!response.ok) {
//             const errorData = await response.json();
//             throw new Error(`Ошибка при отправке сообщения: ${errorData.description}`);
//         }

//         res.status(200).send('Сообщение отправлено успешно!');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Произошла ошибка, попробуйте позже.');
//     }
// });

// // Резервное копирование и восстановление данных

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
