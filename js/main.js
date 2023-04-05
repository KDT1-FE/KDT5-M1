const fadeEls = document.querySelectorAll(".fade-in");
fadeEls.forEach(function (fadeEl, index) {
  // gasp.to(요소, 지속시간, 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});
