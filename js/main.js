
new Swiper ('.third_image .swiper-container', {

  //direction: 'horizontal', --> 기본값이라 생략
  slidesPerView: 4,
  spaceBetween: 20,
  centeredSlides: false, //왼쪽부터 슬라이드 시작
  loop: true,
  autopaly: {
    delay: 500
  },
  pagination: {
    el: '.third_image .swiper-pagination', //page 번호 요소 선택자
    clickable: true, //클릭해서 제어 가능 여부
  },
navigation: {
    prevEl: '.thrid_image .swiper-prev',
    nextEl: '.thrid_image .swiper-next'
}});