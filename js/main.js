// SECTION - rankingWrap JS
const swiper_1 = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  autoplay: {
    //시간 1000 이 1초
    delay: 1800,
    disableOnInteraction: false,
  },
  reverseDirection: true,
});

let hovered = document.querySelectorAll(".cardList");

for (let i of hovered) {
  i.addEventListener("mouseover", function () {
    // mouseover => autoplay stop
    swiper_1.autoplay.stop();
    // swiper.slideTo((이동할 슬라이드 인덱스, 속도), false)
    swiper_1.slideTo(0, 0, false);
  });
  i.addEventListener("mouseout", function () {
    // mouseout => autoplay start
    swiper_1.autoplay.start();

    // 특정 슬라이드에서 mouseover 이후 mouseout시 다시 해당 슬라이드로 이동 구현은?
    // swiper.activeIndex를 사용하여 특정 슬라이드의 index를 도출할 수 있으나,
    // swiper.slideTo(0,0, false) 메소드로 인해 결국 index == 0이 된다.
    //
  });
}
// SECTION - bannerWrap JS
const swiper_2 = new Swiper(".swiper-container", {
  // Optional parameters

  loop: true,
  autoplay: {
    //시간 1000 이 1초
    delay: 4000,
    disableOnInteraction: false,
  },
  reverseDirection: true,
  speed: 600,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// SECTION - pickedWrap JS
let bankIndex = 0;
let investIndex = 0;
let pensionIndex = 0;
let fintechIndex = 0;
let magazineIndex = 0;

let bankImageArr = [
  "url(https://cdn.banksalad.com/content%2Fupload%2Fimages%2Fbookkeeping-615384_1920.jpg)",
  "url(https://cdn.banksalad.com/entities/content-tags1505890518445-coins-548949_1920.jpg)",
  "url(https://cdn.banksalad.com/entities/content-columns/1552907839719-save-3402476_1280.jpg)",
];

let bankContentArr = [
  "BEST 입출금통장",
  "BEST 자유적금",
  "쉽게 돈모으는 BEST 잔돈저축",
];

let bankLinkArr = [
  "https://www.banksalad.com/articles/%EA%B3%A0%EA%B8%88%EB%A6%AC-%ED%8C%8C%ED%82%B9%ED%86%B5%EC%9E%A5%EC%97%90-%EB%8C%80%ED%95%9C-%EB%AA%A8%EB%93%A0-%EA%B2%83-%ED%8C%8C%ED%82%B9%ED%86%B5%EC%9E%A5-%EC%82%AC%EC%9A%A9%EB%B2%95%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90",
  "https://www.banksalad.com/contents/best-%EC%9E%90%EC%9C%A0%EC%A0%81%EA%B8%88-r7OLz",
  "https://www.banksalad.com/contents/%EA%B7%80%EC%B0%A8%EB%8B%88%EC%8A%A4%ED%8A%B8%EB%8F%84-%EC%89%BD%EA%B2%8C-%EB%8F%88-%EB%AA%A8%EC%9C%BC%EB%8A%94-%EC%9E%94%EB%8F%88%EC%A0%80%EC%B6%95-BEST3-lZgxy",
];

let investImageArr = [
  "url(https://cdn.banksalad.com/entities/content-columns/1550647851678-code-1839406_1280.jpg)",
  "url(https://cdn.banksalad.com/favorite%2Fupload%2Fimages%2F15_CMA%EC%B6%94%EC%B2%9C.jpg)",
];

let investContentArr = [
  "투자 성향별 BEST 로보-어드바이저",
  "증권사 CMA 체크카드",
];

let investLinkArr = [
  "https://www.banksalad.com/contents/%ED%88%AC%EC%9E%90-%EC%84%B1%ED%96%A5%EB%B3%84-BEST-%EB%A1%9C%EB%B3%B4%EC%96%B4%EB%93%9C%EB%B0%94%EC%9D%B4%EC%A0%80-801a",
  "https://www.banksalad.com/contents/%EC%A6%9D%EA%B6%8C%EC%82%AC-CMA-%EC%B2%B4%ED%81%AC%EC%B9%B4%EB%93%9C-5a4b",
];

let pensionImageArr = [
  "url(https://cdn.banksalad.com/entities/content-columns/1552789202508-money-2724241_1280.jpg)",
  "url(https://cdn.banksalad.com/entities/content-columns/1552790058640-robot-2937861_1280.jpg)",
];

let pensionContentArr = [
  "연금저축, 어디서 가입할까?",
  "연금저축 로보어드바이저 추천",
];

let pensionLinkArr = [
  "https://www.banksalad.com/contents/%EC%97%B0%EB%A7%90%EC%A0%95%EC%82%B0-%EC%84%B8%EC%95%A1%EA%B3%B5%EC%A0%9C-%ED%95%84%EC%88%98%ED%85%9C-%EC%97%B0%EA%B8%88%EC%A0%80%EC%B6%95-%EC%96%B4%EB%94%94%EC%84%9C-%EA%B0%80%EC%9E%85%ED%95%98%EB%8A%94-%EA%B2%8C-%EC%A2%8B%EC%9D%84%EA%B9%8C-EeBoE",
  "https://www.banksalad.com/contents/%EB%82%B4-%EC%97%B0%EA%B8%88-%EB%88%84%EA%B0%80-%EA%B4%80%EB%A6%AC%ED%95%B4%EC%A3%BC%EC%A7%80-%EC%97%B0%EA%B8%88%EC%A0%80%EC%B6%95-%EB%A1%9C%EB%B3%B4%EC%96%B4%EB%93%9C%EB%B0%94%EC%9D%B4%EC%A0%80%EA%B0%80-%EB%8F%84%EC%99%80%EC%A4%84%EA%B2%8C%EC%9A%94-f83FU",
];

let fintechImageArr = [
  "url(https://cdn.banksalad.com/entities/content-columns/1551088106390-experience-3239623_1280.jpg)",
  "url(https://cdn.banksalad.com/entities/content-tags1506590141526-Main_%E1%84%80%E1%85%A1%E1%84%89%E1%85%A1%E1%86%BC%E1%84%92%E1%85%AA%E1%84%91%E1%85%A8%20%E1%84%80%E1%85%A5%E1%84%85%E1%85%A2%E1%84%89%E1%85%A9%20%E1%84%87%E1%85%B5%E1%84%80%E1%85%AD%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%20%281%29.jpg)",
  "url(https://cdn.banksalad.com/entities/content-columns/1513847496971-%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A1%E1%84%8B%E1%85%AE%E1%84%83%E1%85%B3%E1%84%91%E1%85%A5%E1%86%AB%E1%84%83%E1%85%B5%E1%86%BC%20%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A2%E1%86%BA%E1%84%91%E1%85%A9%E1%86%B7%20%E1%84%87%E1%85%B5%E1%84%80%E1%85%AD_main.jpeg)",
];

let fintechLinkArr = [
  "https://www.banksalad.com/contents/%EC%BC%80%EC%9D%B4%EB%B1%85%ED%81%AC-VS-%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%B1%85%ED%81%AC-%EC%96%B4%EB%94%94%EA%B0%80-%EB%8D%94-%EB%82%98%EC%9D%84%EA%B9%8C-8f00",
  "https://www.banksalad.com/contents/%EA%B0%80%EC%83%81%ED%99%94%ED%8F%90-%EA%B1%B0%EB%9E%98%EC%86%8C-%EB%B9%84%EA%B5%90%EB%B6%84%EC%84%9D-7BYW3",
  "https://www.banksalad.com/contents/%ED%81%AC%EB%9D%BC%EC%9A%B0%EB%93%9C%ED%8E%80%EB%94%A9-%ED%94%8C%EB%9E%AB%ED%8F%BC-%EB%B9%84%EA%B5%90-%ED%85%80%EB%B8%94%EB%B2%85-vs-%EC%9C%A0%EC%BA%94%EC%8A%A4%ED%83%80%ED%8A%B8-vs-%EC%99%80%EB%94%94%EC%A6%88-vs-%EC%98%A4%ED%94%88%ED%8A%B8%EB%A0%88%EC%9D%B4%EB%93%9C-wbejU",
];

let fintechContentArr = [
  "케이뱅크VS카카오뱅크 비교분석",
  "가상화폐 거래소 비교분석",
  "4대 크라우드 펀딩 플랫폼 비교",
];

let magazineImageArr = [
  "url(https://cdn.banksalad.com/entities/content-columns/1567693701704-190904_%EB%B1%85%ED%81%AC%EC%83%90%EB%9F%AC%EB%93%9C_30%EB%8C%80_%EC%A7%80%EC%BC%9C%EC%A4%98%28%ED%99%94%EC%9D%B4%ED%8A%B8%29305%20%281%29.jpg)",
  "url(https://cdn.banksalad.com/entities/content-columns/1552789362984-plane-841441_1280.jpg)",
  "url(https://cdn.banksalad.com/entities/content-columns/1552790264733-building-2583628_1280.jpg)",
  "url(https://cdn.banksalad.com/entities/content-columns/1553059727529-woman-792162_1280.jpg)",
];

let magazineContentArr = [
  "나만을 위한 내 돈 관리 앱!",
  "항공사 마일리지 사용 팁",
  "편의점 1+1 행사의 비밀",
  "금융상품 고를 때 가격 비교 쉽게 하는 팁",
];

let magazineLinkArr = [
  "https://www.banksalad.com/contents/500%EB%A7%8C%EC%9D%B4-%EC%84%A0%ED%83%9D%ED%95%9C-%EB%82%B4-%EB%8F%88-%EA%B4%80%EB%A6%AC-%EC%95%B1-%EB%B1%85%ED%81%AC%EC%83%90%EB%9F%AC%EB%93%9C-aDMhD",
  "https://www.banksalad.com/contents/%EB%82%B4%EB%85%84%EC%9D%B4%EB%A9%B4-%EC%86%8C%EB%A9%B8%EB%90%98%EB%8A%94-%ED%95%AD%EA%B3%B5%EC%82%AC-%EB%A7%88%EC%9D%BC%EB%A6%AC%EC%A7%80-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%8D%A8%EC%95%BC-%ED%95%A0%EA%B9%8C-uWarU",
  "https://www.banksalad.com/contents/%ED%8E%B8%EC%9D%98%EC%A0%90-1-1-%ED%96%89%EC%82%AC%EC%9D%98-%EB%B9%84%EB%B0%80-5QtJR",
  "https://www.banksalad.com/contents/%EA%B8%88%EC%9C%B5%EC%83%81%ED%92%88-%EA%B3%A0%EB%A5%BC-%EB%95%8C-%EA%B0%80%EA%B2%A9-%EB%B9%84%EA%B5%90-%EC%89%BD%EA%B2%8C-%ED%95%98%EB%8A%94-%ED%8C%81-l1MiJ",
];

const changeNextImage2 = () => {
  bankIndex++;
  if (bankIndex > 2) {
    bankIndex = 0;
  }
  document.getElementById("pcI_2").style.backgroundImage =
    bankImageArr[bankIndex];
  document.getElementById("pcC_2").innerHTML = bankContentArr[bankIndex];
  document.getElementById("pickedClickArea__2").href = bankLinkArr[bankIndex];
};

const changePrevImage2 = () => {
  bankIndex--;
  if (bankIndex < 0) {
    bankIndex = 2;
  }
  document.getElementById("pcI_2").style.backgroundImage =
    bankImageArr[bankIndex];
  document.getElementById("pcC_2").innerHTML = bankContentArr[bankIndex];
  document.getElementById("pickedClickArea__2").href = bankLinkArr[bankIndex];
};

const changeNextImage3 = () => {
  investIndex++;

  if (investIndex > 1) {
    investIndex = 0;
  }
  document.getElementById("pcI_3").style.backgroundImage =
    investImageArr[investIndex];
  document.getElementById("pcC_3").innerHTML = investContentArr[investIndex];
  document.getElementById("pickedClickArea__3").href =
    investLinkArr[investIndex];
};

const changePrevImage3 = () => {
  investIndex--;

  if (investIndex < 0) {
    investIndex = 1;
  }
  document.getElementById("pcI_3").style.backgroundImage =
    investImageArr[investIndex];
  document.getElementById("pcC_3").innerHTML = investContentArr[investIndex];
  document.getElementById("pickedClickArea__3").href =
    investLinkArr[investIndex];
};

const changeNextImage4 = () => {
  pensionIndex++;

  if (pensionIndex > 1) {
    pensionIndex = 0;
  }
  document.getElementById("pcI_4").style.backgroundImage =
    pensionImageArr[pensionIndex];
  document.getElementById("pcC_4").innerHTML = pensionContentArr[pensionIndex];
  document.getElementById("pickedClickArea__4").href =
    pensionLinkArr[pensionIndex];
};

const changePrevImage4 = () => {
  pensionIndex--;

  if (pensionIndex < 0) {
    pensionIndex = 1;
  }
  document.getElementById("pcI_4").style.backgroundImage =
    pensionImageArr[pensionIndex];
  document.getElementById("pcC_4").innerHTML = pensionContentArr[pensionIndex];
  document.getElementById("pickedClickArea__4").href =
    pensionLinkArr[pensionIndex];
};

const changeNextImage5 = () => {
  fintechIndex++;

  if (fintechIndex > 2) {
    fintechIndex = 0;
  }
  document.getElementById("pcI_5").style.backgroundImage =
    fintechImageArr[fintechIndex];
  document.getElementById("pcC_5").innerHTML = fintechContentArr[fintechIndex];
  document.getElementById("pickedClickArea__5").href =
    fintechLinkArr[fintechIndex];
};

const changePrevImage5 = () => {
  fintechIndex--;

  if (fintechIndex < 0) {
    fintechIndex = 2;
  }
  document.getElementById("pcI_5").style.backgroundImage =
    fintechImageArr[fintechIndex];
  document.getElementById("pcC_5").innerHTML = fintechContentArr[fintechIndex];
  document.getElementById("pickedClickArea__5").href =
    fintechLinkArr[fintechIndex];
};

const changeNextImage6 = () => {
  magazineIndex++;

  if (magazineIndex > 3) {
    magazineIndex = 0;
  }
  document.getElementById("pcI_6").style.backgroundImage =
    magazineImageArr[magazineIndex];
  document.getElementById("pcC_6").innerHTML =
    magazineContentArr[magazineIndex];
  document.getElementById("pickedClickArea__6").href =
    magazineLinkArr[magazineIndex];
};

const changePrevImage6 = () => {
  magazineIndex--;

  if (magazineIndex < 0) {
    magazineIndex = 3;
  }
  document.getElementById("pcI_6").style.backgroundImage =
    magazineImageArr[magazineIndex];
  document.getElementById("pcC_6").innerHTML =
    magazineContentArr[magazineIndex];
  document.getElementById("pickedClickArea__6").href =
    magazineLinkArr[magazineIndex];
};
