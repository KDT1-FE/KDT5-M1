// TODO: 따로 나누어진 함수와 이벤트 리스너를 하나로 합쳐야 함
// 조건문으로 함수 구현 가능
// 이벤트 리스너를 합치는 것이 중요 -> gnb를 어떻게 가져올 지 고민해야 함
const header = document.querySelector("header");
const gnb = document.querySelectorAll("#gnb li");
const kakaoMenu = gnb[0].querySelector(".kakao-menu");
const tech = gnb[2].querySelector(".tech");
const promises = gnb[3].querySelector(".promises");

// 서브메뉴 이벤트 함수
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

// 스크롤을 내렸을시 헤더 숨김 이벤트 함수
function onScrollHeader(e) {
  // 스크롤 위치가 1 이상인 경우
  if (e.deltaY > 1) {
    header.style.borderBottom = "1px solid #eee"; // 헤더 하단에 선 생성
    // 스크롤 위치가 250 이상인 경우
    if (e.deltaY > 250) {
      header.style.transform = "translateY(-72px)"; // 헤더 높이만큼 올려서 없애기
    } else if (e.deltaY < e.deltaY - 1) {
      header.style.borderBottom = "1px solid #eee";
      header.style.transform = "translateY(0)";
    }
  } else {
    // 생성된 선 none 처리
    header.style.borderBottom = "none";
    // 높이만큼 올라가서 없어졌던 헤더 다시 높이만큼 내려오기
    header.style.transform = "translateY(0)";
  }
}

// 이벤트 리스너
gnb[0].addEventListener("click", onKakaoMenu);
gnb[1].addEventListener("click", onNews);
gnb[2].addEventListener("click", onTech);
gnb[3].addEventListener("click", onPromises);
window.addEventListener("wheel", onScrollHeader);
