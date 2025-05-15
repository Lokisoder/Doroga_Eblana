const highlight1 = new Highlight('.but1');
// setTimeout("highlight1.setActiveElement();", 3000);
const tooltip1 = new ToolTip('.but2', '.pop-up-block', '.but4', '.span1', 'Привет Руслан');
// setTimeout("tooltip1.popUpBlock();", 3000);
const highlight2 = new Highlight('.but3');
// setTimeout("highlight2.setActiveElement();", 3000);

class Frame {
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
        this.element.handleActiveElementClick(e);
        resolve(this.element);
      }, { capture: true, once: true })
    })
  }

}

class Timeline {
  constructor(frames) {
    this.frames = frames;
  }

  async run() {
    for (const frame of this.frames) {
      await frame.run().then((result) => {
        console.log('frame', result);});
    }
  }
}

const frame1 = new Frame(highlight1);
const frame2 = new Frame(highlight2);
const timeline = new Timeline([frame1, frame2]);

timeline.run().then(() => console.log('FINISH'));