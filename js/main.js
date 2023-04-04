//메뉴 마우스오버 효과
// const item = document.querySelector(".item");
// const itemContents = document.querySelector(".item__contents");

// let subToggle = true;
// function show_sub() {
//   if (subToggle) {
//     itemContents.style.height = "120px";
//     subToggle = !subToggle;
//   } else {
//     itemContents.style.height = "0px";
//     subToggle = !subToggle;
//   }
// }

// item.addEventListener("onmouseover", show_sub);

//마우스 hover img src 변경하기
const imgArea = document.querySelector(".special__section-main-thumb > img");
const itemHover = document.querySelectorAll(
  ".special__section-main-content__list > li"
);

itemHover.forEach((el, index) => {
  el.onmouseover = () => {
    imgArea.src = `./images/special_${index + 1}.png`;
  };
});

//차트 클릭 switch
const movieChart = document.querySelector(".list-title-moviechart");
const movieSchedule = document.querySelector(".list-title-schedule");
const btnSwitch = document.querySelector(".btn-switch");
const movieSwiper = document.querySelectorAll(".movie-chart");

function chartSwitch(event) {
  const eventTarget = event.target;

  if (eventTarget === movieChart) {
    eventTarget.classList.add("chart-strong");
    movieSchedule.classList.remove("chart-strong");
    movieSwiper[1].classList.add("btn-switch");
    movieSwiper[0].classList.remove("btn-switch");
    console.log("무비차트");
  } else if (eventTarget === movieSchedule) {
    eventTarget.classList.add("chart-strong");
    movieChart.classList.remove("chart-strong");
    movieSwiper[0].classList.add("btn-switch");
    movieSwiper[1].classList.remove("btn-switch");
    console.log("상영예정작");
  }
}
movieChart.addEventListener("click", chartSwitch);
movieSchedule.addEventListener("click", chartSwitch);
