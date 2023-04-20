const infoBtnPrv = document.querySelector(".info__banner button:first-child")
const infoBtnNxt = document.querySelector(".info__banner ul + button")
const infoBanner = document.querySelectorAll(".info__banner ul li")

infoBtnNxt.addEventListener("click", function () {
  infoBanner.forEach(function(event) {
    event.classList.add("banner--moved")
  })
})

infoBtnPrv.addEventListener("click", function () {
  infoBanner.forEach(function(event) {
    event.classList.remove("banner--moved")
  })
})