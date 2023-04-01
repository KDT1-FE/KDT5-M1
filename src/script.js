
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
