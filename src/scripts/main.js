// eslint-disable-next-line import/extensions
import Slide from './slide-show.js';

const hamburgerButton = document.querySelector('.js-navigation-interaction-element');
const menuList = document.querySelector(hamburgerButton.dataset.jsInteractionTarget);

function toogleMenu() {
  hamburgerButton.classList.toggle('hamburger-button--is-open');
  menuList.classList.toggle('main-header__menu-bar-nav--is-open');
}

hamburgerButton.addEventListener('click', toogleMenu);

const slideShow = document.querySelectorAll('[data-js-slide-show]');

slideShow.forEach((elem) => {
  const config = JSON.parse(elem.dataset.jsSlideShowConfig);
  new Slide(elem, config);
});
