let clicksCount = 0;

document.getElementById("press").addEventListener("click", updateClicks);
document.getElementById("reset").addEventListener("click", resetarClicks);

function updateClicks() {
  clicksCount++;
  document.getElementById("times").innerHTML = `Vezes clicado: ${clicksCount}`
}

function resetarClicks() {
  clicksCount = 0;
  document.getElementById("times").innerHTML = `Vezes clicado:`
}