// search
const searchInput = document.querySelector(".searchInput");
const searchIcon = document.querySelector(".searchIcon");

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("active");
  searchIcon.innerText = searchIcon.innerText === "search" ? "close" : "search";
});

//scroll, hover header
const headerEl = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (scrollY > 0) {
    headerEl.classList.add("hovered");
  } else {
    headerEl.classList.remove("hovered");
  }
});

// notice & event on
// 중복 수정
const tabParent = document.querySelector(".tab");
const tabChildren = document.querySelectorAll(".tab a");
const swiperContents = document.querySelector(".swiper__contents");

tabParent.addEventListener("click", (event) => {
  tabChildren.forEach((child) => child.classList.remove("on"));
  event.target.classList.add("on");
  swiperContents.textContent = event.target.textContent;
});

// scroll top
const toTopEl = document.querySelector(".to-top");
toTopEl.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
