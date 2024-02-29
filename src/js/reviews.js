const reviewsContainer = document.querySelector('.reviews__list');
const reviews = reviewsContainer.querySelectorAll('.reviews__item');
const prevReview = document.querySelector('.prev__review');
const nextReview = document.querySelector('.next__review');

let currentIndex = 0;
const maxIndex = reviews.length - 1;

function updateUI() {
  // Перевірка ширини вікна перегляду
  if (window.innerWidth < 835) {
    showReviews(1);
  } else if (window.innerWidth < 1440) {
    showReviews(2);
  } else {
    showReviews(4);
  }
}

function showReviews(numberToShow) {
  // Показати відповідну кількість відгуків, приховавши решту
  reviews.forEach((review, index) => {
    if (index < currentIndex || index >= currentIndex + numberToShow) {
      review.style.display = 'none';
    } else {
      review.style.display = 'grid';
    }
  });
}

prevReview.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateUI();
  }
});

nextReview.addEventListener('click', () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateUI();
  }
});

// Оновлення відображення при завантаженні сторінки та зміні розміру вікна
window.addEventListener('load', updateUI);
window.addEventListener('resize', updateUI);
