// 대출 영역 배경 애니메이션 효과
const dayNightImgEl = document.querySelector('.day-night .product__image');
const skyEl = document.querySelector('.day-night .sky');
const moonShadowEl = document.querySelector('.moon__shadow');
const moonEl = document.querySelector('.moon');

const oi = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      skyEl.classList.add('show');
      moonEl.classList.add('show');
      moonShadowEl.classList.add('show');
    }
  });
});

oi.observe(dayNightImgEl);

// 체크카드 슬라이드
new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: -50,
  centeredSlides: true,
  loop: true,
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next',
  },
});
