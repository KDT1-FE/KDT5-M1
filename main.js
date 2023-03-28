const searchInput = document.querySelector(".searchInput");
const searchIcon = document.querySelector(".searchIcon");

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("active");
  searchIcon.innerText = searchIcon.innerText === "search" ? "close" : "search";
});
