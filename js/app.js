
const year = new Date().getFullYear();
const thirteenOfJune = new Date(year, 6,13).getTime();
const thirteenOfJuneNextYear = new Date(year + 1, 3, 21).getTime();
const month = new Date().getMonth();

// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  let diff;
  if(month > 6) {
    diff = thirteenOfJuneNextYear - today;
  } else {
    diff = thirteenOfJune - today;
  }




  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>seconds</div> \
</div>";

}, 1000);
// countdown


// register
function inic(){
    document.querySelector('.cont_modal').className = 'cont_modal cont_modal_active';
   }
 window.onload = function(){
    inic();

 }

//  mydiv 
   function myDiv() {
    var reveals = document.querySelectorAll(".board-row");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 1;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", myDiv);
  // another anim class
  function scope(){
    var box= document.querySelectorAll(".card-row");
    for(let i=0 ; i < box.length; i++){
      let bodyHeight = window.innerHeight;
      var boxTop = box[i].getBoundingClientRect().top;
      var boxVisible = 0;
      if(boxTop < bodyHeight - boxVisible){
        box[i].classList.add("here");
      }else{
        box[i].classList.remove("here")
      }
    }
  }
  window.addEventListener("scroll", scope)
  
 
 
 
    