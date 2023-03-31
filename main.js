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

// notive & event on
const tabBtn1El = document.querySelector(".tab__btn__1");
const tabBtn2El = document.querySelector(".tab__btn__2");
const swiperContentsEl = document.querySelector(".swiper__contents");

tabBtn1El.addEventListener("click", () => {
  tabBtn1El.classList.add("on");
  tabBtn2El.classList.remove("on");
  swiperContentsEl.innerText = "공지사항";
});
tabBtn2El.addEventListener("click", () => {
  tabBtn2El.classList.add("on");
  tabBtn1El.classList.remove("on");
  swiperContentsEl.innerText = "이벤트";
});

// floatings hover
const floatingEl1 = document.querySelector(".floating1");
const floatingEl2 = document.querySelector(".floating2");
const floatingEl3 = document.querySelector(".floating3");
const floatingEl4 = document.querySelector(".floating4");

floatingEl1.addEventListener("mouseover", () => {
  floatingEl1.querySelector("img").src = "./images/ft_icon1_hv.png";
});
floatingEl1.addEventListener("mouseout", () => {
  floatingEl1.querySelector("img").src = "./images/ft_icon1.png";
});

floatingEl2.addEventListener("mouseover", () => {
  floatingEl2.querySelector("img").src = "./images/ft_icon2_hv.png";
});
floatingEl2.addEventListener("mouseout", () => {
  floatingEl2.querySelector("img").src = "./images/ft_icon2.png";
});

floatingEl3.addEventListener("mouseover", () => {
  floatingEl3.querySelector("img").src = "./images/ft_icon3_hv.png";
});
floatingEl3.addEventListener("mouseout", () => {
  floatingEl3.querySelector("img").src = "./images/ft_icon1.png";
});

floatingEl4.addEventListener("mouseover", () => {
  floatingEl4.querySelector("img").src = "./images/ft_icon4_hv.png";
});
floatingEl4.addEventListener("mouseout", () => {
  floatingEl4.querySelector("img").src = "./images/ft_icon4.png";
});

// scroll top
const toTopEl = document.querySelector(".to-top");
toTopEl.addEventListener("click", () => {
  window.scrollTo(0, 0);
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
