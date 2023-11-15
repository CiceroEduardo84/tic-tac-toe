import { printHandles, printVictory } from "./components.js";

// DOM Elements
const initialize = document.querySelector(".containerInitialize");
const ranque = document.querySelector(".containerRanque");
const information = document.querySelector(".boxInformation");
const game = document.querySelector(".containerGame");
const currentPlayer = document.querySelector("#currentPlayer");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const timeGame = document.querySelector(".time");
const exit = document.querySelector(".exitRanque");

// Audio Elements
const music = new Audio("./styles/audio/fundo.mp3");
const soundError = new Audio("./styles/audio/erro.mp3");

// Game Variables
const arrayHandles = new Array(9);
const players = [player1, player2];
const draw = "Empate!";
const victory = "Venceu!";

let sortCurrentPlayer;
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let cron;

// -----Start Game-----
const start = () => {
  initialize.style.display = "none";
  ranque.style.display = "none";
  game.style.display = "flex";
  exit.style.display = "block";
  information.style.display = "flex";
  exit.classList.remove("exitRanque");
  exit.classList.add("exitGame");

  function sortPlayer() {
    sortCurrentPlayer = players[Math.floor(Math.random() * 2)].value;
    currentPlayer.innerHTML = sortCurrentPlayer;
  }

  cron = setInterval(() => showTime(), 10);

  if (!sortCurrentPlayer) {
    setTimeout(sortPlayer, 0);
  }

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
  timeGame.innerText = `${returnData(hour)}:${returnData(minute)}:${returnData(second)}`;
};

// -----Exit Game-----
const exitGame = () => {
  let conf = confirm("Tem certeza que deseja desistir?");

  function cancelGame() {
    window.location.reload(true);
  }

  clearInterval(cron);

  if (conf) {
    setInterval(() => music.pause(), 0);

    setTimeout(cancelGame, 1);
  } else {
    start();
  }
};

// -----Game-----
const startGame = (y) => {
  if (!arrayHandles[y]) {
    arrayHandles[y] = sortCurrentPlayer;

    setTimeout(() => {
      sortCurrentPlayer = (sortCurrentPlayer == player1.value) ? player2.value : player1.value;
      currentPlayer.innerHTML = sortCurrentPlayer;
    }, 0);

    showHandles();
    checkountVictorys();
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
  let empty = "";

  if (
    allElementsInSomeLine() ||
    allElementsInSomeColumn() ||
    allElementsInSomeDiagonal()
  ) {
    setTimeout(() => printVictory(sortCurrentPlayer, victory), 500);
  } else if (arrayIsFilled()) {
    setTimeout(() => printVictory(empty, draw), 500);
  }
};

const arrayIsFilled = () => arrayHandles.filter(element => element !== undefined).length === arrayHandles.length;

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
    arrayHandles[index1] == player1.value &&
    arrayHandles[index2] == player1.value &&
    arrayHandles[index3] == player1.value
  ) || (
    arrayHandles[index1] == player2.value &&
    arrayHandles[index2] == player2.value &&
    arrayHandles[index3] == player2.value
  );
};

const showHandles = () => {
  arrayHandles.forEach((handle, indexY) => printHandles(handle, indexY));
};

export { start, startGame };