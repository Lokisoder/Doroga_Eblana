import {FrameFactory, Timeline} from "../../domains";

export class Converter {

  static parse (jsonData) {
    const frames = jsonData.map(step => FrameFactory.create(step));

    return new Timeline(frames);
  }
}