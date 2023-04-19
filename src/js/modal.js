// DOM
const modal = document.getElementById("modal-wrapper");
const open = document.getElementById("open");
const close = document.getElementById("close");

// Modal
onClose(); // 브라우저 실행 시 close 상태

// modal open 이벤트 함수
function onOpen() {
  modal.style.transition = "all 0.3s ease-in-out";
  modal.style.opacity = "1";
  modal.style.visibility = "visible";
}

// modal close 이벤트 함수
function onClose() {
  modal.style.transition = "all 0.3s ease-in-out";
  modal.style.opacity = "0";
  modal.style.visibility = "hidden";
}

open.addEventListener("click", onOpen);
close.addEventListener("click", onClose);
