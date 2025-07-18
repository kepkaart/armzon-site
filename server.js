require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();

// =============================================
// 1. ПОДКЛЮЧЕНИЕ К MONGODB
// =============================================
const {
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASS
} = process.env;

const MONGODB_URI = process.env.MONGODB_URI || 
  `mongodb://${DB_USER}:${encodeURIComponent(DB_PASS)}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000
})
.then(() => console.log('✓ MongoDB подключен'))
.catch(err => {
  console.error('✗ Ошибка MongoDB:', err.message);
  process.exit(1);
});

// =============================================
// 2. НАСТРОЙКИ ПРИЛОЖЕНИЯ
// =============================================
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// =============================================
// 3. ПОДКЛЮЧЕНИЕ РОУТОВ
// =============================================
app.use('/auth', require('./routes/auth'));
app.use('/api', require('./routes/api'));
app.use('/', require('./routes/main'));

// =============================================
// 4. ЗАПУСК СЕРВЕРА
// =============================================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`
=================================
🚀 Сервер запущен на порту ${PORT}
📡 MongoDB: ${DB_HOST}:${DB_PORT}
📊 База данных: ${DB_NAME}
=================================
  `);
});