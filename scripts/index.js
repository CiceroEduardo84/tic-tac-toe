import { toggleMode } from "./lightDarkMode.js";
import { openRanque } from "./ranque.js";
import { start, startGame } from "./newGame.js";

const mode = document.querySelector("#switch");
const ranque = document.querySelector(".boxRanque");
const initGame = document.querySelector(".init");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const parts = Array.from(document.querySelectorAll(`[class^='part']`));

let value1;
let value2;

const verificar = () => {
  value1 = player1.value.split("");
  value2 = player2.value.split("");

  if (value1.length > 4 || value2.length > 4) {
    initGame.addEventListener("click", start);
  }
};

setInterval(() => {
  verificar();
}, 1010);

parts.forEach((part, index) => {
  part.addEventListener("click", () => startGame(index));
});
mode.addEventListener("click", toggleMode);
ranque.addEventListener("click", openRanque);
