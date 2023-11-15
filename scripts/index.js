import { toggleMode } from "./lightDarkMode.js";
import { openRanque } from "./ranque.js";
import { start, startGame } from "./newGame.js";

const mode = document.querySelector("#switch");
const ranque = document.querySelector(".boxRanque");
const initGame = document.querySelector(".init");
const hundler0 = document.querySelector("#hundler0");
const hundler1 = document.querySelector("#hundler1");
const hundler2 = document.querySelector("#hundler2");
const hundler3 = document.querySelector("#hundler3");
const hundler4 = document.querySelector("#hundler4");
const hundler5 = document.querySelector("#hundler5");
const hundler6 = document.querySelector("#hundler6");
const hundler7 = document.querySelector("#hundler7");
const hundler8 = document.querySelector("#hundler8");

mode.addEventListener("click", toggleMode);
ranque.addEventListener("click", openRanque);
initGame.addEventListener("click", start);
hundler0.addEventListener("click", ()=>{startGame(0)});
hundler1.addEventListener("click", ()=>{startGame(1)});
hundler2.addEventListener("click", ()=>{startGame(2)});
hundler3.addEventListener("click", ()=>{startGame(3)});
hundler4.addEventListener("click", ()=>{startGame(4)});
hundler5.addEventListener("click", ()=>{startGame(5)});
hundler6.addEventListener("click", ()=>{startGame(6)});
hundler7.addEventListener("click", ()=>{startGame(7)});
hundler8.addEventListener("click", ()=>{startGame(8)});
