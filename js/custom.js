$(document).ready(function(){
    $(".search-here").click(function(){
        $(".header-form").slideToggle();
    });
    $(".ti-close").click(function(){
        $(".header-form").slideUp();
    });
    $(window).on('scroll', function(){
   if ($(window).scrollTop() > 0) {
     $('header').addClass('fixed-header');
      }
   else {
     $('header').removeClass('fixed-header');
   }
});
   $('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

   $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
});

});

