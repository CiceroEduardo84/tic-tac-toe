import { toggleMode } from "./lightDarkMode.js";
import { openRanque } from "./ranque.js";
import { start } from "./newGame.js";

const mode = document.querySelector("#switch");
const ranque = document.querySelector(".boxRanque");
const startGame = document.querySelector(".init");

mode.addEventListener("click", toggleMode);
ranque.addEventListener("click", openRanque);
startGame.addEventListener("click", start);
