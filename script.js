const hamburgerBtn = document.querySelector('.ri-menu-line');
const hamburgerMenu = document.querySelector('#navlinks');
const body = document.querySelector('body');

hamburgerBtn.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('show');
  body.classList.toggle('body-overflow-hidden');

  if(hamburgerBtn.className === 'ri-menu-line') {
    hamburgerBtn.className = 'ri-close-fill';
  } else {
    hamburgerBtn.className = 'ri-menu-line';
  }
});