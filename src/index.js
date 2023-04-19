document.addEventListener("DOMContentLoaded", function(){
const sliders = document.getElementsByClassName("back_slide");
let currentSlideIndex = 0;
const intervalDuration = 3000; // 5 seconds

setInterval(() => {
  const currentSlide = sliders[currentSlideIndex];
  const nextSlideIndex = (currentSlideIndex + 1) % sliders.length;
  const nextSlide = sliders[nextSlideIndex];

  currentSlide.classList.remove("active");
  nextSlide.classList.add("active");

  currentSlideIndex = nextSlideIndex;
}, intervalDuration);

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

  prevButton.addEventListener("click", () => {
    const currentSlide = sliders[currentSlideIndex];
    const prevSlideIndex = currentSlideIndex === 0 ? sliders.length - 1 : currentSlideIndex - 1;
    const prevSlide = sliders[prevSlideIndex];

    currentSlide.classList.remove("active");
    prevSlide.classList.add("active");

    currentSlideIndex = prevSlideIndex;
  });

  nextButton.addEventListener("click", () => {
    const currentSlide = sliders[currentSlideIndex];
    const nextSlideIndex = (currentSlideIndex + 1) % sliders.length;
    const nextSlide = sliders[nextSlideIndex];

    currentSlide.classList.remove("active");
    nextSlide.classList.add("active");

    currentSlideIndex = nextSlideIndex;
  });
});
