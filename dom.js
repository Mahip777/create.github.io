

function swipe(){
document.getElementById("swipe1").style.display = "none";
}
function swipe2(){
document.getElementById("swipe1").style.display = "block";
    
}
const sliders = document.querySelectorAll(".slide-in");
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, 
  appearOptions); 
  
  sliders.forEach(slider => {
    appearOnScroll.observe(slider);
  }); 
//   var slideIndex = 0;
//   showSlides(slideIndex);

//   function plusSlides(n) {
//       showSlides(slideIndex += n);
//   }

//   function currentSlide(n) {
//       showSlides(slideIndex = n);
//   }

//   function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("slides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}    
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";  
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " active";
//   }
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("slides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   if(slides.length){
//     slides[slideIndex-1].style.display = "block";  
//   }
//  if(dots.length)
//   dots[slideIndex-1].className += " active";
// }


  



