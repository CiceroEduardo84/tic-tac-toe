import { toggleMode } from "./lightDarkMode.js";
import { openRanque } from "./ranque.js";
import { start, startGame } from "./newGame.js";

const mode = document.querySelector("#switch");
const ranque = document.querySelector(".boxRanque");
const initGame = document.querySelector(".init");
const hundler01 = document.querySelector("#hundler00");
const hundler02 = document.querySelector("#hundler01");
const hundler03 = document.querySelector("#hundler02");
const hundler04 = document.querySelector("#hundler10");
const hundler05 = document.querySelector("#hundler11");
const hundler06 = document.querySelector("#hundler12");
const hundler07 = document.querySelector("#hundler20");
const hundler08 = document.querySelector("#hundler21");
const hundler09 = document.querySelector("#hundler22");

mode.addEventListener("click", toggleMode);
ranque.addEventListener("click", openRanque);
initGame.addEventListener("click", start);
hundler01.addEventListener("click", ()=>{startGame(0,0)});
hundler02.addEventListener("click", ()=>{startGame(0,1)});
hundler03.addEventListener("click", ()=>{startGame(0,2)});
hundler04.addEventListener("click", ()=>{startGame(1,0)});
hundler05.addEventListener("click", ()=>{startGame(1,1)});
hundler06.addEventListener("click", ()=>{startGame(1,2)});
hundler07.addEventListener("click", ()=>{startGame(2,0)});
hundler08.addEventListener("click", ()=>{startGame(2,1)});
hundler09.addEventListener("click", ()=>{startGame(2,2)});
