'use strict';


const addEventOnElements = (elements, eventType, callback) => {
  elements.forEach(el => el.addEventListener(eventType, callback));
};


const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
};

navToggler.addEventListener("click", toggleNav);
addEventOnElements(navLinks, "click", () => {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
});


const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  const isActive = window.scrollY > 100;
  header.classList.toggle("active", isActive);
  backTopBtn.classList.toggle("active", isActive);
});


addEventOnElements(document.querySelectorAll("[data-btn]"), "mousemove", function (event) {
  this.style.setProperty("--top", `${event.offsetY}px`);
  this.style.setProperty("--left", `${event.offsetX}px`);
});


const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = () => {
  revealElements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight / 1.1) {
      el.classList.add("revealed");
    }
  });
};

window.addEventListener("scroll", revealElementOnScroll);
window.addEventListener("load", revealElementOnScroll);

const cursor = document.querySelector("[data-cursor]");
const hoverElements = document.querySelectorAll("a, button");

window.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

addEventOnElements(hoverElements, "mouseover", () => cursor.classList.add("hovered"));
addEventOnElements(hoverElements, "mouseout", () => cursor.classList.remove("hovered"));
