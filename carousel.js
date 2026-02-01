const track = document.getElementById("track");
const speed = 1; // pixels per frame

// Clone images
track.innerHTML += track.innerHTML;

let position = 0;
let halfWidth;

function updateWidth() {
  halfWidth = track.scrollWidth / 2;
}

updateWidth();
window.addEventListener("resize", updateWidth);

function animate() {
  position -= speed;

  if (Math.abs(position) >= halfWidth) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

animate();
