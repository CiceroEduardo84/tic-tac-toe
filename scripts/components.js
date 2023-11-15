let handles;
let victory;

function printHandles(showHandle, X) {
  handles = document.querySelector(`#hundler${X}`);
  handles.innerHTML = "";

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

function printVictory(phrase, player) {
  victory = document.querySelector("article");
  victory.innerHTML = `        
    <section class="containerVictory">
      <div class="boxVictory">
        <div class="backgroundVictory">
          <img src="./styles/images/stars.svg" alt="" />
          <div class="playerVictory">
            <p>${player} ${phrase}</p>
          </div>
        </div>
        <button class="reloadWindow">OK</button>
      </div>
    </section>`;
}

export { printHandles, printVictory };