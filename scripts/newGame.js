import { printHandles, printVictory } from "./components.js";

const initialize = document.querySelector(".containerInitialize");
const ranque = document.querySelector(".containerRanque");
const information = document.querySelector(".boxInformation");
const game = document.querySelector(".containerGame");
const currentPlayer = document.querySelector("#currentPlayer");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const timeGame = document.querySelector(".time");
const exit = document.querySelector(".exitRanque");
const music = new Audio("./styles/audio/fundo.mp3");
const soundError = new Audio("./styles/audio/erro.mp3");
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

  cron = setInterval(() => {
    showTime();
  }, 10);

  if (!sortCurrentPlayer) {
    setTimeout(sortPlayer, 0);
  }

  setInterval(() => {
    music.play();
  }, 100);

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

  function cancelGame() {
    window.location.reload(true);
  }

  clearInterval(cron);

  if (conf) {
    setInterval(() => {
      music.pause();
    }, 0);

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
      sortCurrentPlayer =
        sortCurrentPlayer == player1.value ? player2.value : player1.value;
      currentPlayer.innerHTML = sortCurrentPlayer;
    }, 0);
// ---------------------------------------------------------------
    showHandles();
    allElementsInSomeLine();
    allElementsInSomeColumn();
    allElementsInSomeDiagonal();

    if (arrayIsFilled()) {
      let empy = "";
      printVictory(empy, draw);
    }
// ----------------------------------------------------------------
  } else {
    soundError.play();
    setTimeout(() => {
      soundError.pause();
      soundError.currentTime = 0;
    }, 1000);
  }
};

const arrayIsFilled = () => {
  let numberFilled = 0;
  for (let x = 0; x < arrayHandles.length; x++) {
    if (arrayHandles[x] != undefined) {
      numberFilled++;
    }
  }
  return numberFilled == arrayHandles.length;
};

const allElementsInSomeLine = () => {
  for (let i = 0; i < 7; i += 3) {
    if (
      arrayHandles[i] == player1.value &&
      arrayHandles[i + 1] == player1.value &&
      arrayHandles[i + 2] == player1.value
    ) {
      setTimeout(() => {
        printVictory(sortCurrentPlayer, victory);
      }, 1000);
    }
    if (
      arrayHandles[i] == player2.value &&
      arrayHandles[i + 1] == player2.value &&
      arrayHandles[i + 2] == player2.value
    ) {
      setTimeout(() => {
        printVictory(sortCurrentPlayer, victory);
      }, 1000);
    }
  }
};

const allElementsInSomeColumn = function () {
  for (var i = 0; i < 3; i++) {
    if (
      arrayHandles[i] == player1.value &&
      arrayHandles[i + 3] == player1.value &&
      arrayHandles[i + 6] == player1.value
    ) {
      setTimeout(() => {
        printVictory(sortCurrentPlayer, victory);
      }, 1000);
    }
    if (
      arrayHandles[i] == player2.value &&
      arrayHandles[i + 3] == player2.value &&
      arrayHandles[i + 6] == player2.value
    ) {
      setTimeout(() => {
        printVictory(sortCurrentPlayer, victory);
      }, 1000);
    }
  }
};

const allElementsInSomeDiagonal = function () {
  if (
    (arrayHandles[0] == player1.value &&
      arrayHandles[4] == player1.value &&
      arrayHandles[8] == player1.value) ||
    (arrayHandles[2] == player1.value &&
      arrayHandles[4] == player1.value &&
      arrayHandles[6] == player1.value)
  ) {
    setTimeout(() => {
      printVictory(sortCurrentPlayer, victory);
    }, 1000);
  } else if (
    (arrayHandles[0] == player2.value &&
      arrayHandles[4] == player2.value &&
      arrayHandles[8] == player2.value) ||
    (arrayHandles[2] == player2.value &&
      arrayHandles[4] == player2.value &&
      arrayHandles[6] == player2.value)
  ) {
    setTimeout(() => {
      printVictory(sortCurrentPlayer, victory);
    }, 1000);
  }
};

const showHandles = () => {
  for (let indexY = 0; indexY < arrayHandles.length; indexY++) {
    printHandles(arrayHandles[indexY], indexY);
  }
};

// -----End Game-----
// const endGame = () => {
//   initialize.style.display = "flex";
//   game.style.display = "none";
//   exit.style.display = "none";
//   information.style.display = "none";

//   hour = 0;
//   minute = 0;
//   second = 0;
//   millisecond = 0;
//   cron = 0;

//   function stopAudioStart() {
//     music.pause();
//   }
//   setInterval(stopAudioStart, 0);
// };

export { start, startGame };
