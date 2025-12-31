const libro = document.getElementById("paginas");
const paginas = document.querySelectorAll(".pagina");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentPair = 0;

function mostrarLibro() {
  paginas.forEach(p => p.classList.remove("active", "left", "right", "turn"));
  const leftIndex = currentPair * 2;
  const rightIndex = leftIndex + 1;
  if (paginas[leftIndex]) paginas[leftIndex].classList.add("active", "left");
  if (paginas[rightIndex]) paginas[rightIndex].classList.add("active", "right");
  prevBtn.disabled = currentPair === 0;
  nextBtn.disabled = rightIndex >= paginas.length - 1;
}

nextBtn.addEventListener("click", () => {
  const rightPage = paginas[currentPair * 2 + 1];
  if (rightPage) {
    rightPage.classList.add("turn");
    setTimeout(() => { currentPair++; mostrarLibro(); }, 600);
  }
});

prevBtn.addEventListener("click", () => { if (currentPair > 0) { currentPair--; mostrarLibro(); } });

// Corazones automáticos
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 1000);

// Control de música
const musica = document.getElementById("musicaFondo");
const btnMusica = document.getElementById("toggleMusica");
btnMusica.addEventListener("click", () => {
  if (musica.paused) { musica.play(); btnMusica.textContent = "⏸️ Pausar música"; }
  else { musica.pause(); btnMusica.textContent = "▶️ Reproducir música"; }
});
