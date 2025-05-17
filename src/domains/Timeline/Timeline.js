export class Timeline {
  constructor(frames) {
    this.frames = frames;
  }

  onOverlay() {
    document.body.classList.add("disabledClick");
    document.querySelector(".overlay").classList.add("overlay--active");
  }

  offOverlay() {
    document.body.classList.remove("disabledClick");
    document.querySelector(".overlay").classList.remove("overlay--active");
  }

  async run() {
    this.onOverlay();

    for (const frame of this.frames) {
      await frame.run().then((result) => {
        console.log('frame', result);
      });
    }

    this.offOverlay();
  }
}
