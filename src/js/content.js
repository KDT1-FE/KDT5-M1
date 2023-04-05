// height 값이 350인 경우
const leftContent = document.getElementById("left-box");
const topBtn = document.querySelector(".top-button");

function onScrollFixedBox() {
  if (window.scrollY >= 350) {
    leftContent.style.position = "fixed";
    leftContent.style.top = "72px";
    leftContent.style.width = "630px";
    leftContent.style.height = "468px";
    if (window.scrollY >= 1192) {
      // 하단에 붙을 때 부자연스럽게 붙는 버그 발생
      // TODO: 버그 수정
      leftContent.style.position = "relative";
      leftContent.style.top = "865px";
    }
    console.dir(window.scrollY);
  } else {
    leftContent.style.position = "sticky";
  }
}

function onScrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", onScrollFixedBox);
topBtn.addEventListener("click", onScrollTop);
