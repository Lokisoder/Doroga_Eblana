import {Tooltip, Highlight} from "../../components";
import {Frame} from "../Frame";


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
          step.popup.block,
          step.popup.button,
          step.popup.span,
          step.text
        );
        break;

        default:
          throw new Error(`Unknown step type: ${step.type}`);
    }
    return new Frame(element);
  }
}