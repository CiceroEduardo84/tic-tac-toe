import { toggleMode } from "./lightDarkMode.js";
import { openRanque } from "./ranque.js";
import { start, startGame } from "./newGame.js";

const mode = document.querySelector("#switch");
const ranque = document.querySelector(".boxRanque");
const initGame = document.querySelector(".init");
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
initGame.addEventListener("click", start);
hundler01.addEventListener("click", ()=>{startGame(0)});
hundler02.addEventListener("click", ()=>{startGame(1)});
hundler03.addEventListener("click", ()=>{startGame(2)});
hundler04.addEventListener("click", ()=>{startGame(3)});
hundler05.addEventListener("click", ()=>{startGame(4)});
hundler06.addEventListener("click", ()=>{startGame(5)});
hundler07.addEventListener("click", ()=>{startGame(6)});
hundler08.addEventListener("click", ()=>{startGame(7)});
hundler09.addEventListener("click", ()=>{startGame(8)});
