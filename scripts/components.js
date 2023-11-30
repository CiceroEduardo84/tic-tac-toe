import { gameFunctions } from "./newGame.js";

function themeParts() {
  let theme = localStorage.getItem("@TicTacToe:Mode");

  if (theme == "dark-mode") {
    xisMode = "./images/XisDarckMode.svg";
    circleMode = "./images/BolinhaDarckMode.svg";
  } else {
    xisMode = "./images/XisLightMode.svg";
    circleMode = "./images/BolinhaLightMode.svg";
  }
}

function printPart(showPart, players, X) {
  let part = document.querySelector(`.part${X}`);

  themeParts();
  part.innerHTML = "";
  if (showPart == players[0]) {
    part.innerHTML += `
      <img
        src="${xisMode}"
        alt=""
        class="part"
      />
    `;
  } else if (showPart == players[1]) {
    part.innerHTML += `
      <img
        src="${circleMode}"
        alt=""
        class="part"
      />
    `;
  }
}

function printVictory(player, phrase) {
  let victory;
  let reloadWindow;

  victory = document.querySelector("article");
  victory.innerHTML += `        
    <section class="containerVictory">
      <div class="boxVictory">
        <div class="backgroundVictory">
          <img src="./images/stars.svg" alt="" />
          <div class="playerVictory">
            <p>${phrase} ${player}!</p>
          </div>
        </div>
        <button class="reloadWindow">OK</button>
      </div>
    </section>`;

  reloadWindow = document.querySelector(".reloadWindow");
  reloadWindow.addEventListener("click", gameFunctions.endGame);
}

let xisMode;
let circleMode;

export { printPart, printVictory };
