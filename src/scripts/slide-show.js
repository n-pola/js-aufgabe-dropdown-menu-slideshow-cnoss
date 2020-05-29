export default class Slide {
  constructor(obj, config) {
    this.obj = obj;
    this.config = config.wrapAround;
    this.selectedObj = 0;
    this.images = obj.querySelectorAll(obj.dataset.jsSlideShow);
    this.images[0].classList.add('slide-show__slide--visible');
    this.images.forEach((element) => {
      element.addEventListener('click', () => {
        const fullscreenElem = document.fullscreenElement;

        if (fullscreenElem != null) {
          document.exitFullscreen();
        } else {
          element.requestFullscreen();
        }
      });
    });
    obj.querySelector('[data-js-nav-next-slide]').addEventListener('click', () => {
      this.next();
    });
    obj.querySelector('[data-js-nav-previous-slide]').addEventListener('click', () => {
      this.previous();
    });
  }

  previous() {
    if (!(this.selectedObj - 1 < 0)) {
      // eslint-disable-next-line no-plusplus
      this.selectedObj--;
      this.showImage(this.selectedObj);
    } else if (this.config) {
      this.selectedObj = this.images.length - 1;
      this.showImage(this.selectedObj);
    }
  }

  next() {
    if (this.selectedObj + 1 < this.images.length) {
      // eslint-disable-next-line no-plusplus
      this.selectedObj++;
      this.showImage(this.selectedObj);
    } else if (this.config) {
      this.selectedObj = 0;
      this.showImage(this.selectedObj);
    }
  }

  showImage(index) {
    this.images.forEach((element) => {
      element.classList.remove('slide-show__slide--visible');
    });
    this.images[index].classList.add('slide-show__slide--visible');
  }
}
