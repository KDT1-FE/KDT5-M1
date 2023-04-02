// interior-view-swiper swiper-slide, swiper-slide-active

function toggleSwiperIndex() {
  document.querySelectorAll('.interior-view-swiper div.swiper-slide').forEach((el, i) => {
    if (el.classList.contains('swiper-slide-active')) {
      document.querySelector(`.interior-view-swiper-indexes span:nth-child(${i + 1})`).classList.add('active')
    } else {
      document.querySelector(`.interior-view-swiper-indexes span:nth-child(${i + 1})`).classList.remove('active')
    }
  })
}

document.querySelector('.l-swiper-btn-prev').addEventListener('click', toggleSwiperIndex)
document.querySelector('.l-swiper-btn-next').addEventListener('click', toggleSwiperIndex)
window.addEventListener('DOMContentLoaded', toggleSwiperIndex)
