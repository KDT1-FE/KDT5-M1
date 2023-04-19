// event delegation
// drop-down
const subMenu = document.querySelector('.row');
subMenu.addEventListener('click', (e)=>{
  
  const target = e.target;
  if(target === null) return

  if (target.classList.contains('on')) {
    gsap.to(target.nextElementSibling, 0.5, {
      display: 'none',
      height: 0,
    })
    target.classList.remove('on');
  } else {
    gsap.to(target.nextElementSibling, 0.5, {
      display: 'block',
      height: target.nextElementSibling.children.length * 50 + 'px',
      overflow: 'hidden',
    })
    target.classList.add('on');
  }
})

// Menu
const openEl = document.querySelector('.sub-menu .material-icons');
const subMenuHead = document.querySelector('.sub-menu__head');
const exitEl = subMenuHead.querySelector('.sub-menu__extend .material-icons');
openEl.addEventListener('click', ()=>{
  gsap.to(exitEl.parentElement.parentElement, 0.4, {
    display: 'block',
    right: '0',
  })
})
exitEl.addEventListener('click', ()=>{
  gsap.to(subMenuHead.parentElement, 0.4, {
    display: 'none',
    right: '-75%',
  })
})



new Swiper('.inner .swiper', {
  loop: true,
  navigation: {
    prevEl: ".swiper-prev",
    nextEl: ".swiper-next",
  },
});



// FLICKITY
let carouselStatus = document.querySelector('.status');
let progressBar = document.querySelector('.bar');

const target = document.getElementById('flickity');
const videos = target.getElementsByTagName('video');
const videosLength = videos.length;

const flickity = new Flickity(target,{
  wrapAround:true,
  autoPlay:false,
  on: {
    ready: function() {
    console.log('Flickity ready');
    videos[0].play();
    },
  },
})

for(let i = 0;i < videosLength; i++){
  videos[i].addEventListener('loadedmetadata',function(){
    console.log("Video Duration_" + i + " : "+ videos[i].duration);
  },false);
  videos[i].addEventListener('ended',function(){
    flickity.next('true');
  },false);
}

function updateStatus() {
  var slideNumber = flickity.selectedIndex + 1;
  carouselStatus.innerHTML = '0' + slideNumber + '<span>' + ' / ' + '0' + flickity.slides.length + '</span>';
}

function progress(progress) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
}

updateStatus();
progress();

flickity.on('change',changeSlide);
function changeSlide(index) {
  for(let i = 0;i < videosLength; i++){
    videos[i].currentTime = 0;
    videos[index].play();
  }
}

flickity.on( 'select', updateStatus );
flickity.on( 'scroll', progress);

const next = document.querySelector('.next-btn');
const nextBtn = document.querySelector('.flickity-prev-next-button.next');
next.addEventListener('click',(e)=>{
  e.preventDefault();
  nextBtn.dispatchEvent(new Event('click'));
})
