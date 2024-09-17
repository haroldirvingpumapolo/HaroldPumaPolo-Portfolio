/* changed from WelcomeScreen to MainContainer */

setTimeout(function () {
  document.querySelector("#main-content").style.display = "block";
  document.querySelector(".welcome-screen").remove();
}, 2900);

/* animation based on the scroll */

const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
      entry.target.classList.add(entry.target.dataset.animation);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".animate-on-scroll").forEach((el) => {
  observer.observe(el);
});

/* animation for the hero */

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
  updateLayersPosition(0.1, image2);
  updateLayersPosition(0.06, image3);
}

animate();
