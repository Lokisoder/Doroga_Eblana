import { Converter } from "./src/services";
import config from "./src/mocks/config.json" with { type: "json" };


const sosal = document.querySelector(".but1");
sosal.addEventListener("click", flipbuttone);

function flipbuttone(event) {

  if (!event.currentTarget) return;

  const min = 0;
  const max = 255;
  const a = Math.floor(Math.random() * (max - min)) + min;
  const b = Math.floor(Math.random() * (max - min)) + min;
  const c = Math.floor(Math.random() * (max - min)) + min;

  event.currentTarget.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}

const timeline = Converter.parse(config);
timeline.run();
