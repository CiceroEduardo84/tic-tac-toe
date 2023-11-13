import { toggleMode } from "./lightDarkMode.js";
import { openRanque } from "./ranque.js";
import { start } from "./newGame.js";

const mode = document.querySelector("#switch");
const ranque = document.querySelector(".boxRanque");
const startGame = document.querySelector(".init");

const hundler01 = document.querySelector("#hundler01");
const hundler02 = document.querySelector("#hundler02");
const hundler03 = document.querySelector("#hundler03");
const hundler04 = document.querySelector("#hundler04");
const hundler05 = document.querySelector("#hundler05");
const hundler06 = document.querySelector("#hundler06");
const hundler07 = document.querySelector("#hundler07");
const hundler08 = document.querySelector("#hundler08");
const hundler09 = document.querySelector("#hundler09");

mode.addEventListener("click", toggleMode);
ranque.addEventListener("click", openRanque);
startGame.addEventListener("click", start);

function slr(a) {
  console.log(a);
}

hundler01.addEventListener("click", slr);
hundler02.addEventListener("click", slr);
hundler03.addEventListener("click", slr);
hundler04.addEventListener("click", slr);
hundler05.addEventListener("click", slr);
hundler06.addEventListener("click", slr);
hundler07.addEventListener("click", slr);
hundler08.addEventListener("click", slr);
hundler09.addEventListener("click", slr);
