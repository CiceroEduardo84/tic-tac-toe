const initialize = document.querySelector(".containerInitialize");
const information = document.querySelector(".boxInformation");
const game = document.querySelector(".containerGame");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const timeGame = document.querySelector(".time");
const exit = document.querySelector(".exit");
const music = new Audio("./styles/audio/fundo.mp3");
const laughter = new Audio("./styles/audio/risada.mp3");
const arrayHandles = new Array(9);
const currentPlayer = { player1: player1.value, player2: player2.value };

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

// -----Start Game-----
const start = () => {
  initialize.style.display = "none";
  game.style.display = "flex";
  exit.style.display = "block";
  information.style.display = "flex";

  function start() {
    cron = setInterval(() => {
      showTime();
    }, 10);
  }
  setTimeout(start, 0);

  exit.addEventListener("click", exitGame);
  music.play();
};

// -----Time-----
const showTime = () => {
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
  timeGame.innerHTML = hour + ":" + minute + ":" + second;
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
  setInterval(stopTime, 0);

  if (conf) {
    setInterval(stopAudiobackground, 0);
    setTimeout(startAudioLaughter, 10);
    setTimeout(stopAudioLaughter, 3000);
    setTimeout(endGame, 3001);
  } else {
    start();
  }
};

// -----End Game-----
const endGame = () => {
  initialize.style.display = "flex";
  game.style.display = "none";
  exit.style.display = "none";
  information.style.display = "none";

  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  cron = 0;

  function stopAudioStart() {
    music.pause();
  }

  setInterval(stopAudioStart, 0);
  // window.location.reload(true);
};

export { start };
