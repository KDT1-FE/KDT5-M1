const sharedNav = document.querySelector('.shared-nav-container');
const gameWrapper = document.querySelector('.game-wrapper');
let navIsScrolled = false;

window.addEventListener('scroll', () => {
  if (!navIsScrolled && scrollY > 37) {
    navIsScrolled = true;
    sharedNav.classList.add('scrolled');
    gameWrapper.classList.add('scrolled');
  } else if (navIsScrolled && scrollY < 37) {
    navIsScrolled = false;
    sharedNav.classList.remove('scrolled');
    gameWrapper.classList.remove('scrolled');
  }
});

const fadeEls = document.querySelectorAll('.fade-in');
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.6,
    opacity: 1,
  });
});

new Swiper('.game-wrapper .swiper-container', {
  allowTouchMove: false,
  slidesPerView: 1,
});

new Swiper('.hardware-wrapper .swiper-container', {
  centeredSlides: true,
  allowTouchMove: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
    fadeOut: 500,
    fadeIn: 500,
    delay: 2000,
  },
  slidesPerView: 1,
  pagination: {
    el: '.hardware-wrapper .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      let spanArray = [
        `PS5 Console`,
        `DualSense™ Wireless Controller`,
        `PULSE 3D™ Wireless Headset`,
        `DualSense Edge`,
        `Media Remote`,
        `HD Camera`,
        `PS5 Console Covers`,
      ];
      let paginationTemplate = `
        <div class="${className}">
          <div class="media-block">
            <div class="media-block__inner">
              <img src="asset/images/horizontal-product-${index}.webp">
            </div>
            <div class="media-block__inner text">
              <span>
                ${spanArray[index]}
              </span>
            </div>
            </div>
          </div>
        </div>
      `;
      return paginationTemplate;
    },
  },
});
