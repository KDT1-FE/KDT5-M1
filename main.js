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

// footer sns hover
const blogEl = document.querySelector(".sns__blog");
const instaEl = document.querySelector(".sns__insta");
const talkEl = document.querySelector(".sns__talk");

blogEl.addEventListener("mouseover", () => {
  blogEl.src = "./images/footer_blog_hv.png";
});
blogEl.addEventListener("mouseout", () => {
  blogEl.src = "./images/footer_blog.png";
});

instaEl.addEventListener("mouseover", () => {
  instaEl.src = "./images/footer_insta_hv.png";
});
instaEl.addEventListener("mouseout", () => {
  instaEl.src = "./images/footer_insta.png";
});

talkEl.addEventListener("mouseover", () => {
  talkEl.src = "./images/footer_talk_hv.png";
});
talkEl.addEventListener("mouseout", () => {
  talkEl.src = "./images/footer_talk.png";
});
