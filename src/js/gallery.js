const galleryContainer = document.querySelector('.gallery__list');
const gallery = galleryContainer.querySelectorAll('.gallery__item');
const prevSlide = document.querySelector('.js-prev-slide');
const nextSlide = document.querySelector('.js-next-slide');

let currentIndex = 0;
const maxIndex = gallery.length - 1;

function updateGallery() {
  if (window.innerWidth < 835) {
    showSlides(1);
  } else if (window.innerWidth < 1440) {
    showSlides(2);
  } else {
    showSlides(3);
  }

  prevSlide.disabled = currentIndex === 0;
  if (window.innerWidth < 835) {
    nextSlide.disabled = currentIndex === maxIndex;
  } else if (window.innerWidth < 1440) {
    nextSlide.disabled = currentIndex >= maxIndex - 1;
  } else {
    nextSlide.disabled = currentIndex >= maxIndex - 2;
  }
}

function showSlides(numberToShow) {
  gallery.forEach((slide, index) => {
    if (index < currentIndex || index >= currentIndex + numberToShow) {
      slide.style.display = 'none';
    } else {
      slide.style.display = 'block';
    }
  });
}

prevSlide.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateGallery();
  }
});

nextSlide.addEventListener('click', () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateGallery();
  }
});

window.addEventListener('load', updateGallery);
window.addEventListener('resize', updateGallery);
