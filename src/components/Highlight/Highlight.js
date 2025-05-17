export class Highlight {
  _element;

  constructor(element) {
    this._element = document.querySelector(element);
  }

  get element() {
    return this._element;
  }

  get action() {
    return this._element;
  }

  setActiveElement() {
    this.element.classList.add('activeElement');
  }

  removeActiveElement() {
    this.element.classList.remove('activeElement');
  }

  show() {
    this.setActiveElement();
  }

  click(event) {
    event.stopPropagation();
    event.preventDefault();
    this.removeActiveElement(event.currentTarget);
  }
}
