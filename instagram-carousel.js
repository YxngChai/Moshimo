const instaTrack = document.getElementById("track");
const speed = 1; // pixels per frame

// Clone images
instaTrack.innerHTML += instaTrack.innerHTML;

let position = 0;
let halfWidth;

function updateWidth() {
  halfWidth = instaTrack.scrollWidth / 2;
}

updateWidth();
window.addEventListener("resize", updateWidth);

function animate() {
  position -= speed;

  if (Math.abs(position) >= halfWidth) {
    position = 0;
  }

  instaTrack.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

animate();
