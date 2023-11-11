const initialize = document.querySelector(".containerInitialize");
const game = document.querySelector(".containerGame");
const exit = document.querySelector(".exit");
const information = document.querySelector(".boxInformation");

function endGame() {
  initialize.style.display = "flex";
  game.style.display = "none";
  exit.style.display = "none";
  information.style.display = "none";
}

function startGame() {
  initialize.style.display = "none";
  game.style.display = "flex";
  exit.style.display = "block";
  information.style.display = "flex";

  exit.addEventListener("click", endGame);
}

export { startGame };
