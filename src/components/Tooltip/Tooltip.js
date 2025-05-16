export class Tooltip {
  _span;
  _block;
  _element;
  _button;
  _text;

  constructor(element, block, button, span, text) {
    this._element = document.querySelector(element);
    this._block = document.querySelector(block);
    this._button = document.querySelector(button);
    this._text = text;
    this.setSpan(span);
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

  setActiveButton() {
    this.button.classList.add('but4--active');
  }

  removeActiveButton() {
    this.button.classList.remove('but4--active');
  }

  show() {
    this.setPositionBlock(this.element, this.block);
    this.setActiveBlock(this.block);
    this.setActiveButton(this.button);
  }

  click(event) {
    event.stopPropagation();
    event.preventDefault();
    this.removeActiveBlock(this.block);
    this.removeActiveButton(this.button);
  }
}
