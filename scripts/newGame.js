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
const arrayHandles = [new Array(3), new Array(3), new Array(3)];
const players = [player1, player2];

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
const startGame = (y, x) => {
  if (!arrayHandles[y][x]) {
    arrayHandles[y][x] = sortCurrentPlayer;
    sortCurrentPlayer =
      sortCurrentPlayer == player1.value ? player2.value : player1.value;

    currentPlayer.innerHTML = sortCurrentPlayer;
    showHandles(y, x);
  } else {
    soundError.play();
    setTimeout(() => {
      soundError.pause();
      soundError.currentTime = 0;
    }, 1000);
  }
};

const showHandles = () => {
  let handles;

  function printHandles(showHandle, Y, X) {
    handles = document.querySelector(`#hundler${Y}${X}`);
    handles.innerHTML = ``;

    if (showHandle == player1.value) {
      handles.innerHTML += `
      <img
      src="./styles/images/Xis-darckMode.svg"
      alt=""
      class="part"
    />
  `;
    } else if (showHandle == player2.value) {
      handles.innerHTML += `
      <img
      src="./styles/images/Bolinha-darckMode.svg"
      alt=""
      class="part"
    />
  `;
    }
  }

  for (let indexY = 0; indexY < arrayHandles.length; indexY++) {
    for (let indexX = 0; indexX < arrayHandles[indexY].length; indexX++) {
      printHandles(arrayHandles[indexY][indexX], indexY, indexX);
    }
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
