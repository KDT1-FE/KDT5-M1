// Swiper를 활용한 배너 슬라이드
new Swiper('.slideWrap .swiper-container', {
  autoplay: {
    delay: 5000
  },
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});


// ASIDE Part - 버튼 클릭 시 페이지 상단으로 이동
const $topBtn = document.querySelector(".btnDocTop");

$topBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// HEADER-FIXED - 스크롤 시 Show & Hide
$(document).ready(function () {
  var navHeight = $("header").height();
  $(".fix--head").hide();
  $(window).scroll(function () {
    var rollIt = $(this).scrollTop() >= navHeight;
    if (rollIt) {
      $(".fix--head").show().css({
        "position": "fixed",
      });
    } else {
      $(".fix--head").hide();
    }
  });
});