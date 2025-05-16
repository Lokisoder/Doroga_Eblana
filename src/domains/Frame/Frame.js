export class Frame {
  _element;

  constructor(element) {
    this._element = element;
  }

  get element() {
    return this._element;
  }

  run() {
    this.element.show()

    return new Promise((resolve, reject) => {
      this.element.element.addEventListener('click', (e)  => {
        this.element.click(e);
        resolve(this.element);
      }, { capture: true, once: true })
    })
  }
}

