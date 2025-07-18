const express = require('express');
const router = express.Router();
const User = require('/models/User');

// Страница входа
router.get('/login', (req, res) => {
  res.render('auth/login'); // Рендерим EJS-шаблон из views/auth/login.ejs
});

// Обработка входа
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    // Здесь будет проверка логина/пароля
    res.redirect('/profile');
  } catch (err) {
    res.render('auth/login', { error: err.message });
  }
});

module.exports = router;