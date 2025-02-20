$(document).ready(function () {
var swiper = new Swiper('.swiper_bnr', {
  autoplay: {
     delay: 3000,
     disableOnInteraction: false
   },
  effect: 'slide', //"slide", "fade", "cube", "coverflow", "flip"

  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  speed: 1200,
  mousewheel: false,
  watchSlidesProgress: true,
  parallax: true,
  spaceBetween:0,
pagination: {
      el: ".swiper-pagination",
			clickable: true,
    },

  navigation: {
    nextEl: '.swiper_bnr .swiper-button-next',
    prevEl: '.swiper_bnr .swiper-button-prev',
  },

});

var swiper2 = new Swiper(".swiper-near", {
  slidesPerView: 1,
  spaceBetween: 15,
    mousewheel: false,
    speed:1200,
  centeredSlides: false,
  freeMode: false,
  grabCursor: true,
 // loop: true,
 autoplay:false,
  autoHeight: true,
 
      navigation: {
    nextEl: ".snear .swiper-button-next",
    prevEl: ".snear .swiper-button-prev"
 
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
          
        
    },
    578: {
      slidesPerView: 2,
          
      
    },
     
      992: {
      slidesPerView: 4,
         
      
    },
      
     
  }
});  
  
var swiper3 = new Swiper(".swiper-things", {
  slidesPerView: 1,
  spaceBetween: 15,
    mousewheel: false,
    speed:1200,
  centeredSlides: false,
  freeMode: false,
  grabCursor: true,
 // loop: true,
 autoplay:false,
  autoHeight: true,
 
   
  breakpoints: {
    0: {
      slidesPerView: 2.1,
          
        
    },
    578: {
      slidesPerView: 3.1,
          
      
    },
     
      992: {
      slidesPerView: 5,
         
      
    },
      
     
  }
});  
  
  var swiper4 = new Swiper(".swiper-testimonial", {
  slidesPerView: 1,
  spaceBetween: 15,
    mousewheel: false,
    speed:1200,
  centeredSlides: false,
  freeMode: false,
  grabCursor: true,
 // loop: true,
 autoplay:false,
  autoHeight: false,
 
      navigation: {
    nextEl: ".Stes .swiper-button-next",
    prevEl: ".Stes .swiper-button-prev"
 
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
          
        
    },
    578: {
      slidesPerView: 1,
          
      
    },
     
      992: {
      slidesPerView: 1,
         
      
    },
      
     
  }
}); 
    
    });