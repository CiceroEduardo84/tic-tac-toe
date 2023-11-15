import { endGame } from "./newGame.js";

let reloadWindow;
let part;
let victory;

function printPart(showPart, X) {
  part = document.querySelector(`.part${X}`);
  part.innerHTML = "";

  if (showPart == player1.value) {
    part.innerHTML += `
      <img
        src="./styles/images/Xis-darckMode.svg"
        alt=""
        class="part"
      />
    `;
  } else if (showPart == player2.value) {
    part.innerHTML += `
      <img
        src="./styles/images/Bolinha-darckMode.svg"
        alt=""
        class="part"
      />
    `;
  }
}

function printVictory(player, phrase) {
  victory = document.querySelector("article");
  victory.innerHTML = `        
    <section class="containerVictory">
      <div class="boxVictory">
        <div class="backgroundVictory">
          <img src="./styles/images/stars.svg" alt="" />
          <div class="playerVictory">
            <p>${phrase}: ${player}!</p>
          </div>
        </div>
        <button class="reloadWindow">OK</button>
      </div>
    </section>`;

  reloadWindow = document.querySelector(".reloadWindow");
  reloadWindow.addEventListener("click", endGame);
}

export { printPart, printVictory };
