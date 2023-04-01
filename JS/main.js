// 메인 하단버튼 클릭 시 특정 위치로 이동
const btn = document.querySelector('.material-symbols-outlined')

btn.addEventListener('click', function () {
  window.scrollTo({
    top: 1193,
    behavior: 'smooth'
  });
});


// 메인 하단버튼 floating 효과
function floatingObject(selector) {
  gsap.to(selector, 1, {
    y: 20,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    opacity: 1  // 다시 뒤로 재생되는 옵션
  });
};
floatingObject('.floating');


// 스크롤 시 헤더 border-bottom 숨김 처리
const header = document.querySelector('header')

window.addEventListener('scroll', function () {
  if (scrollY > 0) {
    header.classList.add('border-bottom');
  } else {
    header.classList.remove('border-bottom');
  }
});


// 스크롤 애니메이션
