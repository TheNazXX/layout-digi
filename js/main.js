$(function(){
  
$('.top-slider').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="assets/images/forward.svg" alt=""></button>',
  prevArrow: '<button type=""button class="slick-arrow slick-prev"><img src="assets/images/back.svg" alt=""></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {

      }
    },

    {
      breakpoint: 640,
      settings: {
          arrows:false
      }
    }

  ]
});
});