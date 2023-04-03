var responsiveSlider = function(){
    let slider = document.getElementById("slider");
    let sliderWidth = slider.offsetWidth;
    let slideList = document.getElementById("sliderWrap");
    let items = slideList.querySelectorAll("li").length;
    
    let count = 0;

    slideNums = slideList.querySelectorAll("li");
   
    for(let i=0;i<items;i++){
      slideNums[i].addEventListener("click", function(){
        count = i;
          slideList.style.left = "0px";
      });
    }
    /*
    slideNums[0].addEventListener("click", function(){
    count = 0;
    slideList.style.left = "0px";
    });

    slideNums[1].addEventListener("click", function(){
      count = 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
    });

    slideNums[2].addEventListener("click", function(){
      count = 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
    });

    slideNums[3].addEventListener("click", function(){
      count = 3;
      slideList.style.left = "-" + count * sliderWidth + "px";
    });
    */
    window.addEventListener("resize", function(){
      sliderWidth = slider.offsetWidth;
      slideList.style.left = "-" + count * sliderWidth + "px";
    });

    var prevSlide = function(){
      if(!count) count = items - 1;
      else count--; 
      slideList.style.left = "-" + count * sliderWidth + "px";
    }
    
    var nextSlide = function(){
      if(count == items - 1) count = 0;
      else count++;
      slideList.style.left =  "-" + count * sliderWidth + "px";
    }
   
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");

    next.addEventListener("click", function(){
      nextSlide();
    }); 
   
    prev.addEventListener("click", function(){
      prevSlide();
    });
    
    setInterval(function(){
      nextSlide();
    }, 5000);
  }
  
  window.onload = function(){
    responsiveSlider();
  }
