const leftContent = document.getElementById("left-box");
const topBtn = document.querySelector(".top-button");

function onScrollFixedCard() {
  if (window.scrollY >= 350) {
    leftContent.style.position = "fixed";
    leftContent.style.top = "72px";
    leftContent.style.width = "630px";
    leftContent.style.height = "700px";
    if (window.scrollY >= 1000) {
      leftContent.style.position = "absolute";
      leftContent.style.top = "640px";
    }
    console.dir(window.scrollY);
  } else {
    // 상단에 올라갔을 시 다시 원위치 고정
    leftContent.style.position = "sticky";
  }
}

function onScrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", onScrollFixedCard);
topBtn.addEventListener("click", onScrollTop);
