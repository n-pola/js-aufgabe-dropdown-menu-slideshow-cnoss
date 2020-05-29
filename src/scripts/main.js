// eslint-disable-next-line import/extensions
import Slide from './slide-show.js';

const hamburgerButton = document.querySelector('[data-main-navigation]');
const menuList = document.querySelector(hamburgerButton.dataset.mainNavigation);

function toogleMenu() {
  hamburgerButton.classList.toggle('hamburger-button--is-open');
  menuList.classList.toggle('main-header__menu-bar-nav--is-open');
}

hamburgerButton.addEventListener('click', toogleMenu);

const slideShow = document.querySelectorAll('[data-slide-show]');

slideShow.forEach((elem) => {
  new Slide(elem);
});
