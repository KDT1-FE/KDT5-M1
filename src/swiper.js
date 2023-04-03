import Swiper from 'swiper/swiper-bundle.esm'
import 'swiper/swiper-bundle.min.css'

/* eslint-disable no-new */
// 예외적으로 인스턴스를 사용하지 않기떄문에 eslint no-new role을 disable하였습니다.

// category-card-swiper
new Swiper('.category-card-swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
})

// interior-view-swiper
new Swiper('.interior-view-swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  navigation: {
    nextEl: '.l-swiper-btn-next',
    prevEl: '.l-swiper-btn-prev',
  },
})
