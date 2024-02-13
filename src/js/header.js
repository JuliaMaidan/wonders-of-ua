window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  const scrolled = window.scrollY;
  const threshold = 200; // Поріг прокрутки, при якому змінюється фон хедера

  if (scrolled > threshold) {
    header.classList.add('scrolled'); // Додаємо клас, який змінює фон
  } else {
    header.classList.remove('scrolled'); // Видаляємо клас при поверненні до початкового положення
  }
});
