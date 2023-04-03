const savingsInfosEl = document.querySelector('.savings .product__infos');
const savingsImgEl = document.querySelector('.savings .product__image');
const globalEl = document.querySelector('.global');
const globalImgEl = globalEl.querySelector('.global .product__image');
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

const savingsObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      savingsImgEl.classList.add('show');
    }
  });
});

const globalObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      globalImgEl.classList.add('show');
    }
  });
});

savingsObserver.observe(savingsInfosEl);
globalObserver.observe(globalEl);
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
