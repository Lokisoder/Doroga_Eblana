import css from "./main.css?inline";
import { Converter } from "./services/index.js";

import json from "./mocks/config.json";


const style = document.createElement('style')
style.textContent = css
document.head.appendChild(style)


document.addEventListener("DOMContentLoaded", (event) => {
  const timeline = Converter.parse(json)
  timeline.run();
});
