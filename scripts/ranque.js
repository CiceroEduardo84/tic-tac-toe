const initialize = document.querySelector(".containerInitialize");
const ranque = document.querySelector(".containerRanque");
const exitRanque = document.querySelector(".exitRanque");

function closeRanque() {
    initialize.style.display = "flex";
    ranque.style.display = "none";
    exitRanque.style.display = "none";
}

function openRanque() {
    initialize.style.display = "none";
    ranque.style.display = "block";
    exitRanque.style.display = "flex";

    exitRanque.addEventListener("click", closeRanque);
}

export { openRanque };
