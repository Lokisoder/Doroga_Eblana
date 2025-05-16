export class Timeline {
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