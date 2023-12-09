import { printPart, printVictory } from "./components.js";

function sortPlayer() {
  sortCurrentPlayer = players[Math.floor(Math.random() * 2)];
  currentPlayer.innerHTML = sortCurrentPlayer;
}

function startGame() {
  initialize.style.display = "none";
  ranque.style.display = "none";
  game.style.display = "flex";
  exit.style.display = "block";
  information.style.display = "flex";
  players = JSON.parse(localStorage.getItem("@TicTacToe:playersNames"));

  if (!sortCurrentPlayer) {
    sortPlayer();
  }

  music.loop = true;
  music.play();
  exit.addEventListener("click", exitGame);
  showTime();
}

function showTime() {
  finishTimerInterval = setInterval(() => {
    const dateNow = new Date();
    const dateDiff = new Date(dateNow - initialDateTime);
    const minutes = String(dateDiff.getMinutes()).padStart("2", "0");
    const seconds = String(dateDiff.getSeconds()).padStart("2", "0");
    const hours = dateDiff.getSeconds() + dateDiff.getMinutes();

    if (hours == 0) {
      clearInterval(finishTimerInterval);
      alert("Tempo esgotado!");
      saveGame = false;
      endGame();
    } else {
      timeGame.innerHTML = `${minutes}:${seconds}`;
    }
  }, 1000);
}

function endGame() {
  initialize.style.display = "flex";
  ranque.style.display = "none";
  game.style.display = "none";
  exit.style.display = "none";
  information.style.display = "none";

  if (saveGame) {
    const userData = {
      name: sortCurrentPlayer,
      victory: 1,
    };

    const storageRank = JSON.parse(localStorage.getItem("@tictactoe:rank"));

    if (storageRank) {
      const rankData = [...storageRank, userData];
      const updateRank = rankData.reduce((acc, currentValue) => {
        const existingPlayer = acc.find(
          (player) => player.name === currentValue.name
        );

        if (existingPlayer) {
          existingPlayer.victory += currentValue.victory;
        } else {
          acc.push({ name: currentValue.name, victory: currentValue.victory });
        }

        return acc;
      }, []);

      localStorage.setItem("@tictactoe:rank", JSON.stringify(updateRank));
    } else {
      localStorage.setItem("@tictactoe:rank", JSON.stringify([userData]));
    }
  }

  window.location.reload(true);
}

function exitGame() {
  let conf = confirm("Tem certeza que deseja desistir?");
  clearInterval(finishTimerInterval);

  if (conf) {
    music.pause();
    saveGame = false;
    endGame();
  } else {
    startGame();
  }
}

function showParts() {
  arrayParts.forEach((part, indexY) => printPart(part, players, indexY));
}

function allElementsInSomeLine() {
  for (let i = 0; i < 7; i += 3) {
    if (isVictoryCombination(i, i + 1, i + 2)) return true;
  }
  return false;
}

function allElementsInSomeColumn() {
  for (let i = 0; i < 3; i++) {
    if (isVictoryCombination(i, i + 3, i + 6)) return true;
  }
  return false;
}

function allElementsInSomeDiagonal() {
  return isVictoryCombination(0, 4, 8) || isVictoryCombination(2, 4, 6);
}

function isVictoryCombination(index1, index2, index3) {
  return (
    (arrayParts[index1] == players[0] &&
      arrayParts[index2] == players[0] &&
      arrayParts[index3] == players[0]) ||
    (arrayParts[index1] == players[1] &&
      arrayParts[index2] == players[1] &&
      arrayParts[index3] == players[1])
  );
}

function arrayIsFilled() {
  arrayParts.filter((element) => element !== undefined).length ===
    arrayParts.length;
}

function checkountVictorys() {
  const draw = "Empate!";
  const victory = "Vencedor";
  let empty = "";

  if (
    allElementsInSomeLine() ||
    allElementsInSomeColumn() ||
    allElementsInSomeDiagonal()
  ) {
    printVictory(sortCurrentPlayer, victory);
    return true;
  } else if (arrayIsFilled()) {
    printVictory(empty, draw);
  }
  return false;
}

function currentGame(y) {
  if (!arrayParts[y]) {
    arrayParts[y] = sortCurrentPlayer;

    showParts();
    if (!checkountVictorys()) {
      sortCurrentPlayer =
        sortCurrentPlayer == players[0] ? players[1] : players[0];
      currentPlayer.innerHTML = sortCurrentPlayer;
    }
  } else {
    soundError.play();
  }
}

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

const initialDateTime = new Date();
let finishTimerInterval;

let saveGame = true;

export const gameFunctions = { startGame, currentGame, endGame, showParts };
