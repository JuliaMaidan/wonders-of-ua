const reviewsList = document.querySelector('.reviews__list');
const reviews = reviewsList.querySelectorAll('.reviews__item');
const prevReview = document.querySelector('.js-prev-review');
const nextReview = document.querySelector('.js-next-review');

let currentIndex = 0;
const maxIndex = reviews.length - 1;

function updateUI() {
  if (window.innerWidth < 835) {
    showReviews(1);
  } else if (window.innerWidth < 1440) {
    showReviews(2);
  } else {
    showReviews(4);
  }

  prevReview.disabled = currentIndex === 0;
  if (window.innerWidth < 835) {
    nextReview.disabled = currentIndex === maxIndex;
  } else if (window.innerWidth < 1440) {
    nextReview.disabled = currentIndex >= maxIndex - 1;
  } else {
    nextReview.disabled = currentIndex >= maxIndex - 3;
  }
}

function showReviews(numberToShow) {
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

window.addEventListener('load', updateUI);
window.addEventListener('resize', updateUI);
