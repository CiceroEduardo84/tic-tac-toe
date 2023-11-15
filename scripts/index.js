import { toggleMode } from "./lightDarkMode.js";
import { openRanque } from "./ranque.js";
import { start, startGame } from "./newGame.js";

// DOM Elements
const mode = document.querySelector("#switch");
const ranqueButton = document.querySelector(".boxRanque");
const initGameButton = document.querySelector(".init");
const hundlers = Array.from(document.querySelectorAll("[id^='hundler']"));

// Event Listeners
mode.addEventListener("click", toggleMode);
ranqueButton.addEventListener("click", openRanque);
initGameButton.addEventListener("click", start);
hundlers.forEach((hundler, index) => {
  hundler.addEventListener("click", () => startGame(index));
});
