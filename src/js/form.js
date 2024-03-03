function submitForm(event) {
  event.preventDefault(); // Щоб уникнути автоматичного відправлення форми

  // Отримуємо значення полів форми
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Отримуємо модальне вікно
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');

  // Встановлюємо вміст модального вікна з введеними даними
  modalContent.innerHTML = `Name: ${name}<br>Phone: ${phone}<br>Message: ${message}`;

  // Показуємо модальне вікно
  modal.style.display = 'block';
}

// Отримуємо кнопку для закриття модального вікна
const closeBtn = document.getElementsByClassName('close')[0];

// Додаємо обробник події для закриття модального вікна
closeBtn.onclick = function () {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
};

// Закриття модального вікна при натисканні поза ним
window.onclick = function (event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
