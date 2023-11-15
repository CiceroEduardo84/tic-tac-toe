import { toggleMode } from "./lightDarkMode.js";
import { openRanque } from "./ranque.js";
import { start, startGame } from "./newGame.js";

const mode = document.querySelector("#switch");
const ranque = document.querySelector(".boxRanque");
const initGame = document.querySelector(".init");
const handlers = Array.from(document.querySelectorAll(`[class^='part']`));

mode.addEventListener("click", toggleMode);
ranque.addEventListener("click", openRanque);
initGame.addEventListener("click", start);
handlers.forEach((handler, index) => {
  handler.addEventListener("click", () => startGame(index));
});
