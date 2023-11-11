const initialize = document.querySelector(".containerInitialize");
const ranque = document.querySelector(".containerRanque");
const exit = document.querySelector(".exit");

function closeRanque() {
  initialize.style.display = "flex";
  ranque.style.display = "none";
  exit.style.display = "none";
}

function openRanque() {
  initialize.style.display = "none";
  ranque.style.display = "block";
  exit.style.display = "flex";

  exit.addEventListener("click", closeRanque);
}

export { openRanque };
