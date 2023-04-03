# 레이아웃 클론 코딩

강의에서 배운 내용을 최대한 연습하고자 `카카오뱅크` 메인페이지를 클론 코딩 했습니다.

<a href="https://www.kakaobank.com/">카카오뱅크 홈페이지</a>  
<a href="https://neon-stardust-c953e8.netlify.app/">배포사이트</a>

## 상세 설명

- 반복적으로 사용하는 색상값은 CSS 변수로 따로 선언하여 사용했습니다.
- Header 영역은 flex를 통해 배치했고, hover효과로 네비게이션 메뉴들이 나타나도록 구현했습니다.
- Header 영역아래로는 section 태그를 사용하여 구분하였고, section마다 비슷한 레이아웃은 공통 클래스를 사용하여 스타일을 적용했습니다.
- 스크롤 위치에 따른 이미지 애니메이션 효과는 JavaScript IntersectionObserver 함수, transform 속성, transition 속성 등을 사용해 구현했습니다.
- 하단의 체크카드 이미지 슬라이드의 경우 Swiper 라이브러리를 사용하여 구현했습니다.
- 작은 Icon Image의 경우 Sprite Image를 다운받아 활용했습니다.

## 문제점

- 대출상품 설명 영역의 배경이미지가 낮에서 밤으로 변경 될 때, 별이 반짝거리는 애니메이션 효과 추가 필요
