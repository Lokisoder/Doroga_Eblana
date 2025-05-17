export class Tooltip {
  _element;
  _button;
  _span;
  _block;
  _text;
  _action;

  constructor(element, block, button, span, text, action) {
    this._element = document.querySelector(element);
    this._block = document.querySelector(block);
    this._button = document.querySelector(button);
    this._text = text;
    this.setSpan(span);
    this._action = document.querySelector(action);
  }

  get element() {
    return this._element;
  }

  get block() {
    return this._block;
  }

  get button() {
    return this._button;
  }

  get text() {
    return this._text;
  }

  set text(value) {
    this._text = value;
  }

  get action() {
    return this._action;
  }

  setSpan(selector) {
    const span = document.querySelector(selector);
    span.innerText = this.text;
    this._span = span;
  }

  setActiveBlock() {
    this.block.classList.add('pop-up-block--active');
  }

  removeActiveBlock() {
    this.block.classList.remove('pop-up-block--active');
  }

  setPositionBlock() {
    const x = this.element.offsetLeft;
    const y = this.element.offsetTop;
    const width = this.element.offsetWidth;
    const height = this.element.offsetHeight;
    this.block.style.left = x + width + 'px';
    this.block.style.top = y + height + 'px';
  }

  setActiveElement() {
    this.element.classList.add('activeElement', 'disabledClick');
  }

  removeActiveElement() {
    this.element.classList.remove('activeElement', 'disabledClick');
  }

  setActiveButton() {
    this.button.classList.add('but4--active');

  }

  removeActiveButton() {
    this.button.classList.remove('but4--active');
  }

  show() {
    this.setPositionBlock();
    this.setActiveBlock();
    this.setActiveButton();
    this.setActiveElement();
  }

  click(event) {
    event.stopPropagation();
    event.preventDefault();
    this.removeActiveBlock();
    this.removeActiveButton();
    this.removeActiveElement()
  }
}
