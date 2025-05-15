class ToolTip {
  _element;
  _block;
  _button;
  _text;
  _span;

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

  popUpBlock() {
    this.element.addEventListener('click',() => {
      this.setPositionBlock(this.element, this.block);
      this.setActiveBlock(this.block);
      this.setActiveButton(this.button);
      this.button.addEventListener('click', () => {
        this.removeActiveBlock(this.block);
        this.removeActiveButton(this.button);
      });
    })
  }
}

// const tooltip = new ToolTip('.but3', '.pop-up-block', '.but4', '.span1', 'Привет Руслан');
// tooltip.popUpBlock();
