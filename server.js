const express = require('express');
const app = express();
const path = require('path');

// Настройки
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Данные для серверов (в стиле BlackRussia)
const servers = [
  { id: 10, name: "BLACK", online: 1428, max: 1500, color: "#000000" },
  { id: 11, name: "INDIGO", online: 945, max: 1500, color: "#4B0082" },
  { id: 12, name: "CRIMSON", online: 1238, max: 1500, color: "#DC143C" }
];

// Данные для фишек проекта
const features = [
  { icon: "🌆", title: "Уникальный город", desc: "Кастомные здания и локации" },
  { icon: "🚗", title: "200+ транспорта", desc: "Эксклюзивные модели автомобилей" },
  { icon: "💼", title: "70+ профессий", desc: "От таксиста до криминального авторитета" }
];

// Данные для новостей
const news = [
  {
    id: 1,
    title: "Глобальное обновление 2.0",
    excerpt: "Новые миссии, транспорт и игровая механика",
    image: "update.jpg",
    date: "15.07.2023",
    badge: "НОВОЕ"
  }
];

// Константы для доната
const DONAT_RATE = 5; // 1 донат-очко = 5 AMD
const BOT_USERNAME = "YourDonateBot"; // Замените на username вашего бота

// Главная страница
app.get('/', (req, res) => {
  res.render('index', {
    title: "BLACK RUSSIA | Официальный сайт",
    currentPage: 'home',
    servers: servers,
    totalOnline: servers.reduce((sum, server) => sum + server.online, 0),
    features: features,
    news: news
  });
});

// Страница доната (упрощенная версия)
app.get('/donate', (req, res) => {
  res.render('donate', {
    title: "Пополнение баланса | BLACK RUSSIA",
    currentPage: 'donate',
    donatRate: DONAT_RATE,
    botUsername: BOT_USERNAME
  });
});

// API для конвертации AMD в донат-очки
app.post('/donate/calculate', (req, res) => {
  const amdAmount = parseFloat(req.body.amount) || 0;
  const donatPoints = (amdAmount / DONAT_RATE).toFixed(2);
  res.json({ points: donatPoints });
});

app.listen(3000, () => console.log('Сервер запущен: http://localhost:3000'));