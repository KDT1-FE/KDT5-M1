// search
const searchUnderButton = document.querySelector('.btn-search')
const searchTopButton = document.querySelector('.ico-search')
const searchBox = document.querySelector('.search-box')

searchUnderButton.addEventListener('click', function () { 
  searchBox.classList.remove('hide')
})
searchTopButton.addEventListener('click', function () {
  searchBox.classList.add('hide')
})

// totalmenu
const totalMenuButton = document.querySelector('.btn-total-menu')
const totalMenuCloseButton = document.querySelector('.btn-menu-close')
const totalMenu = document.querySelector('.total-menu')
const body = document.querySelector('body') 


totalMenuButton.addEventListener('click', function () {
  totalMenu.style.transform = 'translateX(0%)'
  totalMenu.style.opacity = '1'
  body.style.overflow = 'hidden'
})

totalMenuCloseButton.addEventListener('click', function () {
  totalMenu.style.transform = 'translateX(-100%)'
  totalMenu.style.opacity = '0'
  body.style.overflow = 'auto'
})

// scroll up 
const scrollupButton = document.querySelector('.scroll-up')
scrollupButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0
  })
})

// swiper
new Swiper('.main-visual .swiper', {
  autoplay: {
    delay: 4000
  },
  loop: true,
  pagination: {
    el: '.main-visual .swiper .swiper-pagination',
    clickable: true
  }
})