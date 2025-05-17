import { Highlight, Tooltip } from "../../components";
import { Frame } from "../Frame";


export class FrameFactory {
  static create(step) {
    let element;

    switch (step.type) {
      case "highlight":
        element = new Highlight(step.target);
        break;

      case "tooltip":
        element = new Tooltip(
          step.target,
          step.block,
          step.button,
          step.span,
          step.text,
          step.action
        );
        break;

      default:
        throw new Error(`Unknown step type: ${step.type}`);
    }
    return new Frame(element);
  }
}
