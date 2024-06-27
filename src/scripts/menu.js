console.log("menu.js loaded");

document.addEventListener("DOMContentLoaded", function() {
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const navMenu = document.getElementById("nav-menu");

  if (hamburgerIcon && navMenu) {
    hamburgerIcon.addEventListener("click", function() {
      console.log("clicked");
      navMenu.classList.toggle("open");
    });
  } else {
    console.error("Hamburger icon or nav menu not found");
  }
});
