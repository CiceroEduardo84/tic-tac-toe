import { endGame } from "./newGame.js";

function printPart(showPart, players, X) {
  let part = document.querySelector(`.part${X}`);

  part.innerHTML = "";
  if (showPart == players[0]) {
    part.innerHTML += `
      <img
        src="./styles/images/Xis-darckMode.svg"
        alt=""
        class="part"
      />
    `;
  } else if (showPart == players[1]) {
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
  let victory;
  let reloadWindow;

  victory = document.querySelector("article");
  victory.innerHTML += `        
    <section class="containerVictory">
      <div class="boxVictory">
        <div class="backgroundVictory">
          <img src="./styles/images/stars.svg" alt="" />
          <div class="playerVictory">
            <p>${phrase} ${player}!</p>
          </div>
        </div>
        <button class="reloadWindow">OK</button>
      </div>
    </section>`;

  reloadWindow = document.querySelector(".reloadWindow");
  reloadWindow.addEventListener("click", endGame);
}

export { printPart, printVictory };
