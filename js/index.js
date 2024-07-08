const container = document.querySelector(".hero-container");
const layers = document.querySelectorAll(".layers");

let mouseX = 0;
let mouseY = 0;
let mouseXSmoothed = 0;
let mouseYSmoothed = 0;

container.addEventListener("mousemove", (e) => {
  mouseX = e.pageX - window.innerWidth / 2;
  mouseY = e.pageY - window.innerHeight / 2;
});

function updateSmoothedMousePosition() {
  const smoothingFactor = 0.1;
  mouseXSmoothed += (mouseX - mouseXSmoothed) * smoothingFactor;
  mouseYSmoothed += (mouseY - mouseYSmoothed) * smoothingFactor;
}

function updateLayersPosition() {
  layers.forEach((layer, index) => {
    const speed = index * 0.05;
    const offsetX = mouseXSmoothed * speed;
    const offsetY = mouseYSmoothed * speed;
    layer.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
}

function animate() {
  updateSmoothedMousePosition();
  updateLayersPosition();
  requestAnimationFrame(animate);
}

animate();
