const navEl = document.querySelector("header");
// const topButton = document.getElementById("material-symbols-outlined");
const navWhiteEl = document.querySelector(".nav_white");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY < 200) {
      gsap.to(navEl, 0.6, {
        opacity: 0,
      });
    } else {
      gsap.to(navEl, 0.6, {
        opacity: 1,
      });
    }
  }, 300)
);

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY < 200) {
      gsap.to(navWhiteEl, 0.6, {
        opacity: 1,
      });
    } else {
      gsap.to(navWhiteEl, 0.6, {
        opacity: 0,
      });
    }
  }, 300)
);

// const moveHandler = function () {
//   topButton
//     html.body.animate({ scrollTop: 0 }, 400);
//     return false;

// };
// window.addEventListener("click", moveHandler);
