// Добавьте этот скрипт для переключения вкладок
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.platform-tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Удаляем активный класс у всех вкладок
      tabs.forEach(t => t.classList.remove('active'));
      
      // Добавляем активный класс текущей вкладке
      this.classList.add('active');
      
      // Скрываем все таблицы
      document.querySelectorAll('.requirements-table').forEach(table => {
        table.style.display = 'none';
      });
      
      // Показываем нужную таблицу
      const platform = this.getAttribute('data-platform');
      document.querySelector(`.${platform}-requirements`).style.display = 'block';
    });
  });
});

// Вставьте этот код в конец файла или в отдельный JS-файл
document.addEventListener('DOMContentLoaded', function() {
  const launcher = document.getElementById('interactiveLauncher');
  const container = document.querySelector('.launcher-preview');
  
  if (launcher && container) {
    container.addEventListener('mousemove', (e) => {
      const x = e.clientX - container.getBoundingClientRect().left;
      const y = e.clientY - container.getBoundingClientRect().top;
      
      const centerX = container.offsetWidth / 2;
      const centerY = container.offsetHeight / 2;
      
      const moveX = (x - centerX) / 20;
      const moveY = (y - centerY) / 20;
      
      launcher.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    container.addEventListener('mouseleave', () => {
      launcher.style.transform = 'translate(0, 0)';
    });
  }

  // Переключение между вкладками Windows/Android
  const tabs = document.querySelectorAll('.platform-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      document.querySelectorAll('.requirements-table').forEach(table => {
        table.style.display = 'none';
      });
      
      const platform = this.getAttribute('data-platform');
      document.querySelector(`.${platform}-requirements`).style.display = 'block';
    });
  });
});