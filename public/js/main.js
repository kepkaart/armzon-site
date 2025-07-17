// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Анимация цифр
function animateValue(el, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    el.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
}

// Запуск анимации при скролле
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.style.background = window.scrollY > 50 ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.85)';
});
// Мобильное меню
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
  const nav = document.querySelector('.main-nav');
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

// Активное состояние ссылок
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.main-nav li').forEach(item => {
      item.classList.remove('active');
    });
    this.parentElement.classList.add('active');
  });
});