$(document).ready(function() {
   AOS.init( {
   	  duration: 1000,
      easing: "ease-in-out-back",
      once: true});
   // carousel js
   var owl = $('.owl-carousel');
owl.owlCarousel({
  	responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
  	},
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
    
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[2000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});

 
});
function toggleMenu(){
  var menuToggle = document.querySelector(".mobile-nav-toggle");
  menuToggle.classList.toggle("active");
  var navigation = document.querySelector(".header");
  navigation.classList.toggle("active");
  
 }

  var typed = new Typed('.typed', {
  strings: ['Web Designer', 
            'Graphic Designer',
            'Freelancer',
            'Photographer'],
  smartBackspace: true, // Default value
  typeSpeed: 60,
  loop: true,
});
