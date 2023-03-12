const menuBtn = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileIconOpen = document.querySelector('.icon-open');
const mobileIconClose = document.querySelector('.icon-close');
const mobileLinks = document.querySelectorAll('.mobile-links');
const mobileNavList = document.querySelector('.mobile-nav-list');

// The function to toggle the mobile menu
const toggleMenu = () => {
  menuBtn.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-open');

  if (mobileMenu.classList.contains('is-open')) {
    menuBtn.style.right = '5px';
  } else {
    menuBtn.style.right = '0px';
  }
};

// Close the mobile menu when clicking on links
const toggleMenuLinks = (e) => {
  const linkClick = e.composedPath().includes(mobileLinks);
  if (linkClick) {
    menuBtn.classList.remove('is-active');
    mobileMenu.classList.remove('is-open');
  }
};

// To perform the function of closing the mobile menu when clicked outside the menu
const outClick = function (e) {
  if (e.target.closest('.is-open') || e.target.closest('.is-active')) {
    return;
  } else {
    menuBtn.classList.remove('is-active');
    mobileMenu.classList.remove('is-open');
  }
};

menuBtn.addEventListener('click', toggleMenu);
mobileMenu.addEventListener('click', toggleMenu);

for (let i = 0; i < mobileLinks.length; i++) {
  mobileLinks[i].addEventListener('click', toggleMenuLinks);
}

document.addEventListener('click', (e) => {
  if (mobileMenu.classList.contains('is-open')) {
    outClick(e);
  }
});
