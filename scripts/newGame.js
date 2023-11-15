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
const laughter = new Audio("./styles/audio/risada.mp3");
const soundError = new Audio("./styles/audio/error2.mp3");
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

  function start() {
    cron = setInterval(() => {
      showTime();
    }, 10);
  }

  function sortPlayer() {
    sortCurrentPlayer = players[Math.floor(Math.random() * 2)].value;
    currentPlayer.innerHTML = sortCurrentPlayer;
  }

  music.play();
  setTimeout(start, 0);
  setTimeout(sortPlayer, 0);
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

  function stopAudiobackground() {
    music.pause();
  }
  function startAudioLaughter() {
    laughter.play();
  }
  function stopAudioLaughter() {
    laughter.pause();
  }
  function stopTime() {
    clearInterval(cron);
  }
  setInterval(stopTime, 0)

  function cancelGame() {
    exit.classList.remove("exitGame");
    exit.classList.add("exitRanque");
    window.location.reload(true);
  }

  if (conf) {
    setInterval(stopAudiobackground, 0);
    setTimeout(startAudioLaughter, 0);
    setTimeout(stopAudioLaughter, 3000);
    setTimeout(cancelGame, 3001);
  } else {
    start();
  }
};

// -----Game-----
const startGame = (y, x) => {
  let error;
  let handles;

  function soundErrorStart() {
    error = setInterval(() => {
      soundError.play();
    }, 0);
  }

  function soundErrorStop() {
    clearInterval(error);
  }

  function clearHundles(Y, X) {
    handles = document.querySelector(`#hundler${Y}${X}`);
    handles.innerHTML = ``;
  }

  function printHandles(showHandle, Y, X) {
    handles = document.querySelector(`#hundler${Y}${X}`);

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

  if (!arrayHandles[y][x]) {
    arrayHandles[y][x] = sortCurrentPlayer;
    sortCurrentPlayer =
      sortCurrentPlayer == player1.value ? player2.value : player1.value;
    currentPlayer.innerHTML = sortCurrentPlayer;

    for (let indexY = 0; indexY < arrayHandles.length; indexY++) {
      for (let indexX = 0; indexX < arrayHandles[indexY].length; indexX++) {
        clearHundles(indexY, indexX);
        printHandles(arrayHandles[indexY][indexX], indexY, indexX);
      }
    }
  } else {
    setTimeout(soundErrorStart, 0);
    setInterval(soundErrorStop, 100);
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
