/*
스크롤에 따라 헤더 라인 보이기 숨기기

_.throttle(함수, 시간(ms단위))
gsap.to(요소, 지속시간, 옵션)

다시 하기......

*/
const headerEl = document.querySelector('header.bottom-border');

window.addEventListener('scroll', _.throttle(function () { 
  if (window.scrollY < 1) {
    // 라인 보이기
    gsap.to(headerEl, .1, {
      opacity: 1
    });
  } else {
    // 라인 숨기기
    gsap.to(headerEl, .1, {
      display: 'none'
    });
  }
}, 300));



