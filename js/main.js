const menuBar = document.querySelector('.main-visual .menubar');
const stick1 = document.querySelector('.menubar .upbar');
const stick2 = document.querySelector('.menubar .downbar');
const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const menuBg = document.querySelector('.menu-bg');
const change = document.querySelector('#logo');
let i = 1;

menuBar.addEventListener('click',function(){
  console.log(i);
  if(i === 1){
    stick1.classList.add('close');
    stick2.classList.add('close');
    header.classList.add('show');
    menu.classList.add('show');
    menuBg.classList.add('show');
    change.setAttribute("src","./images/logo-blue.svg");
    i = 0;
  }else{
    stick1.classList.remove('close');
    stick2.classList.remove('close');
    header.classList.remove('show');
    menu.classList.remove('show');
    menuBg.classList.remove('show');
    change.setAttribute("src","./images/logo-w.svg");
    i = 1;
  }
});


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, // 보여짐의 여부를 감시할 요소를 지정
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});

// members 영역 숫자 올라가는 효과

function numberCounter(target_frame, target_number) {
  this.count = 0; this.diff = 0;
  this.target_count = parseInt(target_number);
  this.target_frame = document.getElementById(target_frame);
  this.timer = null;
  this.counter();
};
  numberCounter.prototype.counter = function() {
      const self = this;
      this.diff = this.target_count - this.count;
  
      if(this.diff > 0) {
          self.count += Math.ceil(this.diff / 5);
      }
  
      this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
      if(this.count < this.target_count) {
          this.timer = setTimeout(function() { self.counter(); }, 30);
      } else {
          clearTimeout(this.timer);
      }
  };

let f = true;
window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY > 2800){
    if(f == true){
    new numberCounter("counter", 8651684);
    f = false;
    }
  }
}));

//배너 나타나기

const fixBanner = document.querySelector('.download');

gsap.to(fixBanner, .2,{
  opacity:'1',
  right:'0px',
  delay:1
});


