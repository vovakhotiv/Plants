const menuBtn = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileIconOpen = document.querySelector('.icon-open');
const mobileIconClose = document.querySelector('.icon-close');
const overlay = document.querySelector('.overlay')

const toggleMenu = function () {
  menuBtn.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-open');

  if (mobileMenu.classList.contains('is-open')) {
    menuBtn.style.right = '5px';
  } else {
    menuBtn.style.right = '0px';
  }
};

document.addEventListener('click', (e) => {
  const clickMenu = e.composedPath().includes('mobile-menu')
  if (!clickMenu) {
    menuBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-open');
  }
})