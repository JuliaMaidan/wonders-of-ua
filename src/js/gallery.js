let currentIndex = 0;
const maxIndex = document.querySelectorAll('.gallery__item').length - 1;

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateGallery();
  }
}

function nextSlide() {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateGallery();
  }
}

function updateGallery() {
  const slides = document.querySelectorAll('.gallery__item');
  const screenWidth = window.innerWidth;

  if (screenWidth < 835) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = i === currentIndex ? 'block' : 'none';
    }
  } else if (screenWidth < 1440) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display =
        i === currentIndex || i === currentIndex + 1 ? 'block' : 'none';
    }
  } else {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display =
        i === currentIndex || i === currentIndex + 1 || i === currentIndex + 2
          ? 'block'
          : 'none';
    }
  }

  const prevSlide = document.getElementById('prevSlide');
  const nextSlide = document.getElementById('nextSlide');

  prevSlide.disabled = currentIndex === 0;
  nextSlide.disabled = currentIndex === maxIndex;
}

window.addEventListener('resize', updateGallery);

document.getElementById('prevSlide').addEventListener('click', prevSlide);
document.getElementById('nextSlide').addEventListener('click', nextSlide);
