const leftContent = document.getElementById("left-box");
const topBtn = document.querySelector(".top-button");

function onScrollFixedCard() {
  // 스크롤해서 350px 지점부터 좌측 카드 스크롤해서 따라옴
  // TODO: classlist.add 사용 (현재 작동 X)
  if (window.scrollY >= 350) {
    leftContent.style.position = "fixed";
    leftContent.style.top = "72px";
    leftContent.style.width = "630px";
    leftContent.style.height = "700px";
    // 스크롤 1000px 지점에서 하단 고정
    if (window.scrollY >= 1000) {
      leftContent.style.position = "absolute";
      leftContent.style.top = "635px";
    }
    console.dir(window.scrollY);
  } else {
    // 상단에 올라갔을 시 다시 원위치 고정
    leftContent.style.position = "sticky";
  }
}

// Top 버튼 이벤트 함수
function onScrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", onScrollFixedCard);
topBtn.addEventListener("click", onScrollTop);
