const container = document.querySelector(".hero-container");
const heroBackground = document.querySelector(".hero-background");
const image2 = document.querySelector("#image2");
const image3 = document.querySelector("#image3");

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

function updateLayersPosition(speed, container) {
  const offsetX = mouseXSmoothed * speed;
  const offsetY = mouseYSmoothed * speed;

  container.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

function animate() {
  updateSmoothedMousePosition();
  requestAnimationFrame(animate);
  updateLayersPosition(0.15, heroBackground);
  updateLayersPosition(0.1,image2);
  updateLayersPosition(0.06,image3);
}

animate();
