(function($) {
  
  "use strict";

  
  

 


  
  // Swiper Slider Js
    var carouselSlider = new Swiper('.default-slider-container', {
      slidesPerView : 1,
      slidesPerGroup: 1,
      loop: true,
      speed: 500,
      spaceBetween : 0,
      effect: 'fade',
      
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 4000,
      },
      navigation: {
          nextEl: '.default-slider-container .swiper-button-next',
          prevEl: '.default-slider-container .swiper-button-prev',
      },simulateTouch: false,
    });
    $(".default-slider-container").hover(function() {
      (this).swiper.autoplay.stop();
    }, function() {
      (this).swiper.autoplay.start();
    });

  

    $('.burger').click(function(){
      $('.header-navigation-area').toggleClass('active');
      $('body').toggleClass('lock')
  });
 

  
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
 

})(window.jQuery);