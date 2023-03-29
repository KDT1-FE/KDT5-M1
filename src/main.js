import './scss/main.scss'

// GNB fade in/out
let prevY = 0
window.addEventListener('scroll', () => {
  const currY = window.scrollY
  const gnbClasses = document.querySelector('.gnb-wrap').classList
  if (window.scrollY <= document.querySelector('.banner').clientHeight) {
    gnbClasses.remove('gnb-light')
    gnbClasses.remove('gnb-transparent')
  } else if (prevY > currY) {
    gnbClasses.add('gnb-light')
    gnbClasses.remove('gnb-transparent')
  } else if (gnbClasses.contains('gnb-light')) {
    gnbClasses.remove('gnb-light')
    gnbClasses.add('gnb-transparent')
  }
  prevY = currY
})
