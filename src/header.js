/**
 * @description 카테고리를 열고 닫는 버튼을 visible/hidden하는 함수입니다.
 * @param {boolean} off
 * @return {undefined}
 */
function toggleCategoryCloseBtn(off) {
  document.querySelectorAll('.cover > .close-btn').forEach((cbtn) => {
    if (off) cbtn.style.visibility = 'hidden'
    else cbtn.style.visibility = 'visible'
  })
}

// GNB를 fade in/out하는 이벤트리스너 입니다.
// 스크롤이 위로 움직힐 떄 GNB가 fade in하고 아래로 움직힐 때 fade out합니다.
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

// Open left category
document.querySelector('.l-menu').addEventListener('click', (e) => {
  if (e.target.tagName !== 'A') return null

  document.querySelectorAll('#left-menu > div').forEach((section) => {
    if (!section.dataset.category) return null

    if (e.target.dataset.category === section.dataset.category) {
      section.style.display = 'block'
      // gnb를 고정합니다.
      document.querySelector('.gnb-wrap').classList.add('fix')
      // 배경을 흐리게합니다.
      document.querySelector('#left-menu').classList.add('blur')
    } else {
      section.style.display = 'none'
    }
    return null
  })
  return null
})

// Close left category
document.querySelectorAll('.close-btn > a').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // gnb를 고정을 풉니다.
    document.querySelector('.gnb-wrap').classList.remove('fix')
    // 배경을 밝게 합니다.
    document.querySelector('#left-menu').classList.remove('blur')

    e.currentTarget.closest('.menu').style.display = 'none'
    e.currentTarget.closest('.sub').style.display = 'none'
    toggleCategoryCloseBtn(false)
  })
})

// Open subcategory (left category의 subcategory입니다)
document.querySelectorAll('#left-menu .sub-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.sub').forEach((subEl) => {
      if (subEl.isEqualNode(e.currentTarget.nextElementSibling)) {
        subEl.style.display = 'block'
        toggleCategoryCloseBtn(true)
      } else {
        subEl.style.display = 'none'
      }
    })
  })
})
