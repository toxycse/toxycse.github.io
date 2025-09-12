// Subtle parallax hover effect on gallery images
document.querySelectorAll(".card img").forEach(img => {
  img.addEventListener("mousemove", e => {
    const { offsetX, offsetY, target } = e;
    const x = (offsetX / target.clientWidth - 0.5) * 10;
    const y = (offsetY / target.clientHeight - 0.5) * 10;
    target.style.transform = `scale(1.05) translate(${x}px, ${y}px)`;
  });
  img.addEventListener("mouseleave", e => {
    e.target.style.transform = "scale(1)";
  });
});

// Background music autoplay on first click
const music = document.getElementById("bg-music");
document.addEventListener("click", () => {
  if (music.paused) {
    music.play().catch(err => console.log("Autoplay blocked:", err));
  }
}, { once: true });
