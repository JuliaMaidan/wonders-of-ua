const galleryContainer = document.querySelector('.gallery__list');
const gallery = galleryContainer.querySelectorAll('.gallery__item');
const prevSlide = document.querySelector('.prev__photo');
const nextSlide = document.querySelector('.next__photo');

let currentIndex = 0;
const maxIndex = gallery.length - 1;

function updateGallery() {
  // Перевірка ширини вікна перегляду
  if (window.innerWidth < 835) {
    showSlides(1);
  } else if (window.innerWidth < 1440) {
    showSlides(2);
  } else {
    showSlides(3);
  }
}

function showSlides(numberToShow) {
  // Показати відповідну кількість відгуків, приховавши решту
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

// Оновлення відображення при завантаженні сторінки та зміні розміру вікна
window.addEventListener('load', updateGallery);
window.addEventListener('resize', updateGallery);
