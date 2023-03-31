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
