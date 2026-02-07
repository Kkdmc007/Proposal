const noBtn = document.getElementById("noBtn");
const overlay = document.getElementById("overlay");

const yesSong = document.getElementById("yesSong");
const noSong = document.getElementById("noSong");

/* NO button */
noBtn.addEventListener("click", handleNo);
noBtn.addEventListener("touchstart", handleNo);

function handleNo() {
  // Move button
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  // Stop happy song if playing
  yesSong.pause();
  yesSong.currentTime = 0;

  // Play sad song
  noSong.play();

  // Show emotional overlay
  overlay.style.display = "flex";
}

function closeOverlay() {
  overlay.style.display = "none";
}

/* Fireworks */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function firework() {
  for (let i = 0; i < 80; i++) {
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    const angle = Math.random() * 2 * Math.PI;
    const speed = Math.random() * 6 + 2;

    let px = x;
    let py = y;

    const interval = setInterval(() => {
      px += Math.cos(angle) * speed;
      py += Math.sin(angle) * speed;
      ctx.fillStyle = "pink";
      ctx.fillRect(px, py, 3, 3);
    }, 30);

    setTimeout(() => clearInterval(interval), 800);
  }
}

/* YES button */
function sayYes() {
  // Stop sad song
  noSong.pause();
  noSong.currentTime = 0;

  // Play happy song
  yesSong.play();

  firework();

  document.getElementById("message").innerHTML =
    "You said YES 😭❤️<br>" +
    "From this moment, every tomorrow feels brighter.<br>" +
    "Happy Valentine’s Day, Harsha 💕";
}
