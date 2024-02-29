const menuOpenButton = document.querySelector('.menu__open_button');
const menuCloseButton = document.querySelector('.menu__close_button');
const burgerMenu = document.querySelector('.burger');
const menuItems = document.querySelectorAll('.burger__menu_item a');

menuOpenButton.addEventListener('click', openMenu);
menuCloseButton.addEventListener('click', closeMenu);

function openMenu() {
  burgerMenu.classList.add('burger__open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  burgerMenu.classList.remove('burger__open');
  document.body.style.overflow = '';
}

menuItems.forEach(item => {
  item.addEventListener('click', event => {
    burgerMenu.classList.remove('burger__open');

    const targetId = item.getAttribute('href');

    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth',
    });
    document.body.style.overflow = '';
    event.preventDefault();
  });
});
