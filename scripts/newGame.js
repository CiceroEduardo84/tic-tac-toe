const initialize = document.querySelector(".containerInitialize");
const game = document.querySelector(".containerGame");
const exit = document.querySelector(".exit");
const information = document.querySelector(".boxInformation");
const music = new Audio("./styles/audio/fundo.mp3");

// -----Start Game-----
const start = () => {
  initialize.style.display = "none";
  game.style.display = "flex";
  exit.style.display = "block";
  information.style.display = "flex";

  function audioStart() {
    music.play();
  }
  setTimeout(audioStart, 0);
  exit.addEventListener("click", endGame);
};

// -----End Game-----
const endGame = () => {
  initialize.style.display = "flex";
  game.style.display = "none";
  exit.style.display = "none";
  information.style.display = "none";

  function stopAudioStart() {
    music.pause();
  }

  setTimeout(stopAudioStart, 0);
};
export { start };
