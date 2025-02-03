particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
    move: { enable: true, speed: 2, direction: "none" },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 }
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "repulse" } }
  }
});