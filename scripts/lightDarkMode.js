const html = document.documentElement;

function toggleMode() {
  html.classList.toggle("light-mode");
  localStorage.setItem("@TicTacToe:Mode", html.className);
}

export { toggleMode };
