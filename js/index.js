const container = document.querySelector(".hero-container");
const layers = document.querySelectorAll(".layers");

container.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth - e.pageX * 2) / 5;
  const y = (window.innerHeight - e.pageY * 2) / 5;

  layers.forEach((layer, index) => {
    const speed = index * 0.1;
    const offsetX = x * speed;
    const offsetY = y * speed;
    layer.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
});
