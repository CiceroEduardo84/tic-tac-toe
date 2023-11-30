import { printPart, printVictory } from "./components.js";

// DOM Elements
const initialize = document.querySelector(".containerInitialize");
const ranque = document.querySelector(".containerRanque");
const information = document.querySelector(".boxInformation");
const game = document.querySelector(".containerGame");
const currentPlayer = document.querySelector("#currentPlayer");
const timeGame = document.querySelector(".time");
const exit = document.querySelector(".exit");

const music = new Audio("./audio/fundo.mp3");
const soundError = new Audio("./audio/erro.mp3");
const arrayParts = new Array(9);

let players;
let sortCurrentPlayer;
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let cron;

// -----Start Game-----
const startGame = () => {
  initialize.style.display = "none";
  ranque.style.display = "none";
  game.style.display = "flex";
  exit.style.display = "block";
  information.style.display = "flex";
  players = JSON.parse(localStorage.getItem("@TicTacToe:playersNames"));

  function sortPlayer() {
    sortCurrentPlayer = players[Math.floor(Math.random() * 2)];
    currentPlayer.innerHTML = sortCurrentPlayer;
  }

  if (!sortCurrentPlayer) {
    setTimeout(sortPlayer, 0);
  }

  cron = setInterval(() => showTime(), 10);
  setInterval(() => music.play(), 100);
  exit.addEventListener("click", exitGame);
};

// -----Time-----
const showTime = () => {
  function returnData(input) {
    return input >= 10 ? input : `0${input}`;
  }

  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  timeGame.innerText = `${returnData(hour)}:${returnData(minute)}:${returnData(
    second
  )}`;
};

// -----Exit Game-----
const exitGame = () => {
  let conf = confirm("Tem certeza que deseja desistir?");

  clearInterval(cron);

  if (conf) {
    music.pause();
    endGame();
  } else {
    startGame();
  }
};

// -----Game-----
const currentGame = (y) => {
  if (!arrayParts[y]) {
    arrayParts[y] = sortCurrentPlayer;

    showParts();
    checkountVictorys();

    sortCurrentPlayer =
      sortCurrentPlayer == players[0] ? players[1] : players[0];
    currentPlayer.innerHTML = sortCurrentPlayer;
  } else {
    playErrorSound();
  }
};

const playErrorSound = () => {
  soundError.play();
  setTimeout(() => {
    soundError.pause();
    soundError.currentTime = 0;
  }, 1000);
};

const checkountVictorys = () => {
  const draw = "Empate!";
  const victory = "Vencedor";
  let empty = "";

  if (
    allElementsInSomeLine() ||
    allElementsInSomeColumn() ||
    allElementsInSomeDiagonal()
  ) {
    printVictory(sortCurrentPlayer, victory);
  } else if (arrayIsFilled()) {
    printVictory(empty, draw);
  }
};

const arrayIsFilled = () =>
  arrayParts.filter((element) => element !== undefined).length ===
  arrayParts.length;

const allElementsInSomeLine = () => {
  for (let i = 0; i < 7; i += 3) {
    if (isVictoryCombination(i, i + 1, i + 2)) return true;
  }
  return false;
};

const allElementsInSomeColumn = () => {
  for (let i = 0; i < 3; i++) {
    if (isVictoryCombination(i, i + 3, i + 6)) return true;
  }
  return false;
};

const allElementsInSomeDiagonal = () => {
  return isVictoryCombination(0, 4, 8) || isVictoryCombination(2, 4, 6);
};

const isVictoryCombination = (index1, index2, index3) => {
  return (
    (arrayParts[index1] == players[0] &&
      arrayParts[index2] == players[0] &&
      arrayParts[index3] == players[0]) ||
    (arrayParts[index1] == players[1] &&
      arrayParts[index2] == players[1] &&
      arrayParts[index3] == players[1])
  );
};

const showParts = () => {
  arrayParts.forEach((part, indexY) => printPart(part, players, indexY));
};

// -----End Game-----
const endGame = () => {
  initialize.style.display = "flex";
  ranque.style.display = "none";
  game.style.display = "none";
  exit.style.display = "none";
  information.style.display = "none";

  window.location.reload(true);
};

export const gameFunctions = { startGame, currentGame, endGame, showParts };
