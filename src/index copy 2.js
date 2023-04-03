document.addEventListener("DOMContentLoaded", function(){
  let _values_ = null;
  
  const $slider = document.getElementsByClassName("test");
  let i = 0; 
  let maxSize = $slider.length;
  let next;
  let prev;
  setInterval(function () {
  //console.log($slider[i]);
    //if($slider[i+1] == )
  
    console.log(i+1 == maxSize-1);
    if(i+1 == maxSize-1){
      next = $slider[0];
    }else{
      next = $slider[i+1];
    }
    if(i-1 == maxSize-1){
      prev = $slider[maxSize-1];
    }else{
      prev = $slider[i-1];
    }
    
    _values_ = {
      current : $slider[i],
      next : next,
      prev : prev
    }
  if(maxSize-1 === i){
    $slider[maxSize-1].style.display="none";
    $slider[0].style.display="block";
    i=0;
    }else{
      $slider[i].style.display="none";
      $slider[i+1].style.display="block";
      i++;
    }
  }, 5000);
});

//   const $slider1 = document.getElementsByClassName("test");
//   let max = $slider1.length;

//   const prev1 = document.getElementById("prev");
//   const next1 = document.getElementById("next");

//   next1.addEventListener("click", function(){
//       console.log(_values_);
//       if(_values_ != undefined){
//         _values_.current.style.display="none";
//         _values_.next.style.display="block";
//         _values_.prev.style.display="none";
//       }
//       // $slider[maxSize-1].style.display="none";
//       // $slider[0].style.display="block";
//       // i=0;
//       // }else{
//       //   $slider[i].style.display="none";
//       //   $slider[i+1].style.display="block";
//       //   i++;
//       // }

//   }); 

//   prev1.addEventListener("click", function(){
//     console.log(_values_);
//     if(_values_ != undefined){
      
//       _values_.current.style.display="none";
//       _values_.prev.style.display="block";
//       _values_.next.style.display="none";
//     }
//   }); 

// });



// prev.addEventListener("click", function(){
// });

