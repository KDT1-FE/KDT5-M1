const swiperPrev = document.querySelector(".swiper-prev");

new Swiper(".swiper__movie .swiper-container .movie-chart", {
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerGroup: 5, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
  observer: true, //display: none이 되는 컴포넌트 안에서 Swiper를 사용하는 경우에 필요
  observeParents: true, //display: none이 되는 컴포넌트 안에서 Swiper를 사용하는 경우에 필요
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".swiper__movie .swiper-prev", // 이전 버튼 선택자
    nextEl: ".swiper__movie .swiper-next", // 다음 버튼 선택자
  },
  //첫번재, 마지막 슬라이드에서 버튼 숨김처리
  on: {
    activeIndexChange: function () {
      if (this.realIndex === 0) {
        swiperPrev.classList.add("swiper-button-disabled");
        startNum = false;
      } else {
        swiperPrev.classList.remove("swiper-button-disabled");
      }
    },
  },
});

new Swiper(".swiper__event .swiper-container", {
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerGroup: 3, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
  autoplay: {
    //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
  loop: true, //반복재생
  watchOverflow: true, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정
  observer: true, //display: none이 되는 컴포넌트 안에서 Swiper를 사용하는 경우에 필요
  observeParents: true, //display: none이 되는 컴포넌트 안에서 Swiper를 사용하는 경우에 필요
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".swiper__event .swiper-prev", // 이전 버튼 선택자
    nextEl: ".swiper__event .swiper-next", // 다음 버튼 선택자
  },
});
