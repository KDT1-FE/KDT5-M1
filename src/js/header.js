// TODO: 따로 나누어진 함수와 이벤트 리스너를 하나로 합쳐야 함
// 조건문으로 함수 구현 가능
// 이벤트 리스너를 합치는 것이 중요 -> gnb를 어떻게 가져올 지 고민해야 함
const gnb = document.querySelectorAll("#gnb li");
const kakaoMenu = gnb[0].querySelector(".kakao-menu");
const tech = gnb[2].querySelector(".tech");
const promises = gnb[3].querySelector(".promises");

function onKakaoMenu() {
  kakaoMenu.classList.toggle("active");
  tech.classList.remove("active");
  promises.classList.remove("active");
}

function onNews() {
  kakaoMenu.classList.remove("active");
  tech.classList.remove("active");
  promises.classList.remove("active");
}

function onTech() {
  tech.classList.toggle("active");
  kakaoMenu.classList.remove("active");
  promises.classList.remove("active");
}

function onPromises() {
  promises.classList.toggle("active");
  kakaoMenu.classList.remove("active");
  tech.classList.remove("active");
}

gnb[0].addEventListener("click", onKakaoMenu);
gnb[1].addEventListener("click", onNews);
gnb[2].addEventListener("click", onTech);
gnb[3].addEventListener("click", onPromises);
