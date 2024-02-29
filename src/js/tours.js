const slider = document.querySelector('.tours__list');
const slides = document.querySelectorAll('.tour');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const maxIndex = slides.length - 1;

function showSlide(index) {
  slides.forEach((slide, i) => {
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
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === maxIndex;
  } else {
    if (currentIndex < maxIndex - 1) {
      showSlide(currentIndex);
      slides[currentIndex + 1].style.display = 'block';
    } else if (currentIndex === maxIndex - 1) {
      showSlide(currentIndex);
      slides[currentIndex + 1].style.display = 'block';
    } else {
      showSlide(currentIndex - 1);
      slides[currentIndex].style.display = 'block';
    }
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= maxIndex - 1;
  }
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateUI();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateUI();
  }
});

window.addEventListener('resize', updateUI);

updateUI();
