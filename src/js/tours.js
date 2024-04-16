const allTours = document.querySelector('.tours__list');
const tour = document.querySelectorAll('.tour');
const prevTour = document.querySelector('.js-prev-tour');
const nextTour = document.querySelector('.js-next-tour');

let currentIndex = 0;
const maxIndex = tour.length - 1;

function showSlide(index) {
  tour.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}
function updateUI() {
  if (window.innerWidth < 1440) {
    showSlide(currentIndex);
    prevTour.disabled = currentIndex === 0;
    nextTour.disabled = currentIndex === maxIndex;
  } else {
    if (currentIndex < maxIndex - 1) {
      showSlide(currentIndex);
      tour[currentIndex + 1].style.display = 'block';
    } else if (currentIndex === maxIndex - 1) {
      showSlide(currentIndex);
      tour[currentIndex + 1].style.display = 'block';
    } else {
      showSlide(currentIndex - 1);
      tour[currentIndex].style.display = 'block';
    }
    prevTour.disabled = currentIndex === 0;
    nextTour.disabled = currentIndex >= maxIndex - 1;
  }
}

prevTour.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateUI();
  }
});

nextTour.addEventListener('click', () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateUI();
  }
});

window.addEventListener('resize', updateUI);

updateUI();

document.addEventListener('DOMContentLoaded', function () {
  let bookTour = document.getElementById('bookTour');

  bookTour.addEventListener('click', function () {
    let contactsSection = document.getElementById('contacts');
    contactsSection.scrollIntoView({ behavior: 'smooth' });
  });
});
