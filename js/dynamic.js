const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const arrow = document.querySelector("#scroll-arrow");
const firstSection = document.querySelector(".section");

menu.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});

arrow.addEventListener("click", () => {
  firstSection.scrollIntoView({ behavior: "smooth" });
});
