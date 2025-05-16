export class Highlight {
  _element;

  get element() {
    return this._element;
  }

  constructor(element) {
    this._element = document.querySelector(element);
  }

  disabledAllClicks() {
    document.body.classList.add('disabledClick');
  }

  enableAllClicks() {
    document.body.classList.remove('disabledClick');
  }

  toggleOverlayVisibility(isVisible) {
    if (isVisible) {
      document.querySelector('.overlay').classList.add('overlay--active');
      this.disabledAllClicks();
    } else {
      document.querySelector('.overlay').classList.remove('overlay--active');
      this.enableAllClicks()
    }
  }

  show() {
    this.toggleOverlayVisibility(true);
    this.element.classList.add('activeElement');
  }

  removeActiveElement() {
    this.element.classList.remove('activeElement');
  }

  click(event) {
    event.stopPropagation();
    event.preventDefault();
    this.removeActiveElement(event.currentTarget);
    this.toggleOverlayVisibility(false);
  }
}
