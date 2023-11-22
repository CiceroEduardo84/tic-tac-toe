import { toggleMode } from "./lightDarkMode.js";
// import { openRanque } from "./ranque.js";
import { start, startGame } from "./newGame.js";

const html = document.documentElement;
const mode = document.querySelector("#switch");
// const ranque = document.querySelector(".boxRanque");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const newGameButton = document.querySelector(".init");
const newGameForm = document.querySelector(".formPlayerName");

// const parts = Array.from(document.querySelectorAll(`[class^='part']`));

let storageMode = localStorage.getItem("@TicTacToe:Mode");

if (storageMode) {
  html.className = storageMode;
}

function validateInput() {
  if (player1.value == player2.value) {
    newGameButton.setAttribute("disabled", "true");
  } else if (player1.value.length >= 3 && player2.value.length >= 3) {
    newGameButton.removeAttribute("disabled");
  } else {
    newGameButton.setAttribute("disabled", "true");
  }
}

function handleSubmitNewGame(event) {
  event.preventDefault();
  localStorage.setItem(
    "@TicTacToe:playersNames",
    JSON.stringify([player1.value, player2.value])
  );
  player1.value = "";
  player2.value = "";

  start();
}

// ranque.addEventListener("click", openRanque);
mode.addEventListener("click", toggleMode);
player1.addEventListener("input", validateInput);
player2.addEventListener("input", validateInput);
newGameForm.addEventListener("submit", handleSubmitNewGame);

// parts.forEach((part, index) => {
//   part.addEventListener("click", () => startGame(index));
// });
