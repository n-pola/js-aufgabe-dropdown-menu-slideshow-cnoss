export default class Slide {
  constructor(obj, config) {
    this.obj = obj;
    this.config = config.wrapAround;
    this.selectedObj = 0;
    this.images = obj.querySelectorAll(obj.dataset.jsSlideShow);
    const dotsWrap = obj.querySelector('[data-js-dots]');
    this.images.forEach((element, index) => {
      element.addEventListener('click', () => {
        const fullscreenElem = document.fullscreenElement;

        if (fullscreenElem != null) {
          document.exitFullscreen();
        } else {
          element.requestFullscreen();
        }
      });

      const dot = document.createElement('div');
      dot.classList.add('dot-navigation__dot');
      dot.setAttribute('data-js-dot', index);
      dot.addEventListener('click', () => { this.showImage(dot.dataset.jsDot); });
      dotsWrap.append(dot);
    });
    this.dots = obj.querySelectorAll('[data-js-dot]');
    obj.querySelector('[data-js-nav-next-slide]').addEventListener('click', () => {
      this.next();
    });
    obj.querySelector('[data-js-nav-previous-slide]').addEventListener('click', () => {
      this.previous();
    });
    this.showImage(0);
  }

  previous() {
    if (!(this.selectedObj - 1 < 0)) {
      this.showImage(this.selectedObj - 1);
    } else if (this.config) {
      this.showImage(this.images.length - 1);
    }
  }

  next() {
    if (this.selectedObj + 1 < this.images.length) {
      this.showImage(this.selectedObj + 1);
    } else if (this.config) {
      this.showImage(0);
    }
  }

  showImage(newindex) {
    this.images[this.selectedObj].classList.remove('slide-show__slide--visible');
    this.dots[this.selectedObj].classList.remove('dot-navigation__dot--active');
    this.images[newindex].classList.add('slide-show__slide--visible');
    this.dots[newindex].classList.add('dot-navigation__dot--active');
    this.selectedObj = newindex;
  }
}
