import Swiper from 'swiper/swiper-bundle.esm'
import 'swiper/swiper-bundle.min.css'

// 예외적으로 인스턴스를 사용하지 않기떄문에 eslint no-new role을 disable하였습니다.
// eslint-disable-next-line no-new
new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
