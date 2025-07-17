// Переключение мобильного меню
const burgerBtn = document.querySelector('.header_burger__2c_Qb');
const mobileMenu = document.querySelector('.mobile_mobile__vdWLm');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile_hidden__OLCCc');
  document.body.style.overflow = mobileMenu.classList.contains('mobile_hidden__OLCCc') ? '' : 'hidden';
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.mobile_menu_mobile__AxJW3 a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('mobile_hidden__OLCCc');
    document.body.style.overflow = '';
  });
});