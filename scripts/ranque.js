function closeRanque() {
  initialize.style.display = "flex";
  ranque.style.display = "none";
  exitRanque.style.display = "none";
  exitRanque.classList.remove("exitRanque");
  exitRanque.classList.add("exit");
}

function openRanque() {
  initialize.style.display = "none";
  ranque.style.display = "block";
  exitRanque.style.display = "flex";
  exitRanque.classList.remove("exit");
  exitRanque.classList.add("exitRanque");

  exitRanque.addEventListener("click", closeRanque);
}

const initialize = document.querySelector(".containerInitialize");
const ranque = document.querySelector(".containerRanque");
const exitRanque = document.querySelector(".exit");

export const rank = { openRanque, closeRanque };
