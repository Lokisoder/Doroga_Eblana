class Highlight {
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

  setActiveElement() {
    this.toggleOverlayVisibility(true);
    this.element.classList.add('activeElement');
    this.element.addEventListener('click', this.handleActiveElementClick.bind(this), { capture: true, once: true });
  }

  removeActiveElement() {
    this.element.classList.remove('activeElement');
  }

  handleActiveElementClick(event) {
    event.stopPropagation();
    event.preventDefault();
    this.removeActiveElement(event.currentTarget);
    this.toggleOverlayVisibility(false);
  }
}

const highLight = new Highlight('.but1');
highLight.setActiveElement();