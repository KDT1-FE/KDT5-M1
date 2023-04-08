# innisfree 홈페이지 클론코딩
<br>

> 배포 결과물  
https://innisfree-clone-coding.netlify.app/

<br>

> 원본 사이트  
https://www.innisfree.com/kr/ko/Main.do

<br>
---

<br>

### CDN
  1. `Swiper`  
  https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.1.1/swiper-bundle.min.js  

  2. `Reset`  
   https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css

<br>

### Scroll Js
  1. Scroll (스크롤 시 Header show & hide 부분 적용)   
  https://code.jquery.com/jquery-3.6.4.js

<br>

> HTML  
> -header / mainco / aside / footer

```html
<header></header>

<!-- mainco = maincontents -->
<section class="mainco"></section> 

<!-- aside = 최근 본 제품 및 ScrollTop 부분 -->
<aside></aside>

<footer></footer>
```

<br>

> CSS   
> -공통으로 쓰이는 태그의 속성과 값은 COMMON으로 적용

```css
/* COMMON  */
* {
  margin: 0;
  padding: 0;
}
body {
  font: 16px/1.5 'SDNeoL', 'notoR', 'Malgun Gothic', '맑은 고딕', '돋움', sans-serif;
  letter-spacing: -.06em;
  font-size: 16px;
  color: #777;
}
a {
  text-decoration: none;
  outline: none;
}
img {
  width: 100%;
}
button {
  overflow: visible;
  cursor: pointer;
  background: none;
  border: 0;
  border-radius: 0;
  color: inherit;
  outline: none;
}
li {
  list-style: none;
}
nav {
  display: block;
}
input {
  outline: none;
}

/* header & main-co & aside & footer 안에 이런 형식으로 최소 및 최대를 설정하여 진행했습니다.*/
div {
  min-width: 1024px;
  max-width: 1280px;
  margin: 0 auto;
}

/* display: flex를 사용했습니다. */
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
}
```

<br>

> Javascript   
> -Swiper : Event 부분 슬라이드   
> -Jquery: 스크롤 시 상단으로  
> -스크롤 시 Header show & hide

```javascript
// Swiper를 활용한 배너 슬라이드
new Swiper('.slideWrap .swiper-container', {
  autoplay: {
    delay: 5000
  },
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});
// .swiper-button-prev 와 next를 클릭 시 좌우로 슬라이드가 가능하고, autoplay delay를 5초로 설정하여 5초 후 다음 슬라이드가 보여지도록 했습니다.


// ASIDE Part - 버튼 클릭 시 페이지 상단으로 이동
const $topBtn = document.querySelector(".btnDocTop");

$topBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
// .btnDocTop를 클래스로 사용하는 버튼을 클릭 시 상단으로 자연스럽게 이동하도록 설정했습니다.


// HEADER-FIXED - 스크롤 시 Show & Hide
$(document).ready(function () {
  var navHeight = $("header").height();
  $(".fix--head").hide();
  $(window).scroll(function () {
    var rollIt = $(this).scrollTop() >= navHeight;
    if (rollIt) {
      $(".fix--head").show().css({
        "position": "fixed",
      });
    } else {
      $(".fix--head").hide();
    }
  });
});
// header의 영역이 끝난 후 .fix-head 클래스를 가진 요소가 fixed된 상태에서 보여지고 반대로 스크롤이 올라간 후에는 사라지는 것을 설정했습니다. 
```
