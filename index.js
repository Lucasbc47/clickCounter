let i = 0;

document.getElementById("press").addEventListener("click", updateClicks);
document.getElementById("reset").addEventListener("click", resetarClicks);

function updateClicks() {
  i++;
  document.getElementById("times").innerHTML = `Vezes clicado: ${i}`
}

function resetarClicks() {
  i = 0;
  document.getElementById("times").innerHTML = `Vezes clicado:`
}