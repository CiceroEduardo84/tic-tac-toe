function closeRanque() {
  initialize.style.display = "flex";
  ranque.style.display = "none";
  exitRanque.style.display = "none";
  exitRanque.classList.remove("exitRanque");
  exitRanque.classList.add("exit");
}

function createBodyTableRank() {
  const storageRank = JSON.parse(localStorage.getItem("@tictactoe:rank"));
  let rankSorted;

  if (storageRank) {
    rankSorted = storageRank
      .sort((a, b) => {
        if (a.victory < b.victory) return 1;
        if (a.victory > b.victory) return -1;
        return 0;
      })
      .filter((value, index) => index < 10);
  }

  ranqueValues.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    ranqueValues.innerHTML += `
    <tr>
      <td>${i + 1}</td>
      <td>${rankSorted ? rankSorted[i]?.name || "" : ""}</td>
      <td>${rankSorted ? rankSorted[i]?.victory || "" : ""}</td>
    </tr>
    `;
  }
}

function openRanque() {
  initialize.style.display = "none";
  ranque.style.display = "block";
  exitRanque.style.display = "flex";
  exitRanque.classList.remove("exit");
  exitRanque.classList.add("exitRanque");

  createBodyTableRank();
  exitRanque.addEventListener("click", closeRanque);
}

const initialize = document.querySelector(".containerInitialize");
const ranque = document.querySelector(".containerRanque");
const ranqueValues = document.querySelector(".tableValues tbody");
const exitRanque = document.querySelector(".exit");

export const rank = { openRanque, closeRanque };
