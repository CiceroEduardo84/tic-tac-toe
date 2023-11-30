import { gameFunctions } from "./newGame.js";
import { openRanque } from "./ranque.js";

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
  activePageIsContainerInitialize = false;
  localStorage.setItem(
    "@TicTacToe:playersNames",
    JSON.stringify([player1.value, player2.value])
  );
  player1.value = "";
  player2.value = "";
  gameFunctions.startGame();
}

function clickParts() {
  const parts = Array.from(document.querySelectorAll(".tableParts td"));

  parts.forEach((part, index) => {
    part.addEventListener("click", () => gameFunctions.currentGame(index));
  });
}

function toggleMode() {
  html.classList.toggle("light-mode");
  localStorage.setItem("@TicTacToe:Mode", html.className);
  gameFunctions.showParts();
}

function keyboardShortcuts(event) {
  if (activePageIsContainerInitialize) {
    event.altKey && event.key === "r" ? openRanque() : 0;
  }
  event.altKey && event.key === "m" ? toggleMode() : 0;
}

function themeMode() {
  if (storageMode) {
    html.className = storageMode;
  }
}

const html = document.documentElement;
const mode = document.querySelector("#switch");
const ranque = document.querySelector(".boxRanque");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const newGameButton = document.querySelector(".init");
const newGameForm = document.querySelector(".formPlayerName");

let storageMode = localStorage.getItem("@TicTacToe:Mode");
let activePageIsContainerInitialize = true;

html.addEventListener("keydown", keyboardShortcuts);
ranque.addEventListener("click", openRanque);
mode.addEventListener("click", toggleMode);
player1.addEventListener("input", validateInput);
player2.addEventListener("input", validateInput);
newGameForm.addEventListener("submit", handleSubmitNewGame);

clickParts();
themeMode();
