// Mobile Menu
const mobileMenu = document.querySelector(".mobile-menu");
const menuBtn = document.querySelector(".mobile-menu-on");
const closeBtn = document.querySelector(".mobile-menu-close");

function onMobileMenuOpen() {
  mobileMenu.classList.add("on");
}

function onMobileMenuClose() {
  mobileMenu.classList.remove("on");
}

menuBtn.addEventListener("click", onMobileMenuOpen);
closeBtn.addEventListener("click", onMobileMenuClose);