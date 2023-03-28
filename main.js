const searchInput = document.querySelector(".searchInput");
const searchIcon = document.querySelector(".searchIcon");

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("active");
  searchIcon.innerText = searchIcon.innerText === "search" ? "close" : "search";
});

const headerEl = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (scrollY > 0) {
    headerEl.classList.add("hovered");
  } else {
    headerEl.classList.remove("hovered");
  }
});
