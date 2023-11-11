import { toggleMode } from "./lightDarkMode.js";
import { openRanque } from "./ranque.js";
import { startGame } from "./start.js";

const mode = document.querySelector("#switch");
const ranque = document.querySelector(".boxRanque");
const start = document.querySelector(".init");

mode.addEventListener("click", toggleMode);
ranque.addEventListener("click", openRanque);
start.addEventListener("click", startGame);
