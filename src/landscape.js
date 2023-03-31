// landscape-swiper swiper-slide, swiper-slide-active

function toggleSwiperIndex() {
  document.querySelectorAll('.landscape-swiper div.swiper-slide').forEach((el, i) => {
    if (el.classList.contains('swiper-slide-active')) {
      document.querySelector(`.landscape-swiper-indexes span:nth-child(${i + 1})`).classList.add('active')
    } else {
      document.querySelector(`.landscape-swiper-indexes span:nth-child(${i + 1})`).classList.remove('active')
    }
  })
}

document.querySelector('.l-swiper-btn-prev').addEventListener('click', toggleSwiperIndex)
document.querySelector('.l-swiper-btn-next').addEventListener('click', toggleSwiperIndex)
window.addEventListener('DOMContentLoaded', toggleSwiperIndex)
