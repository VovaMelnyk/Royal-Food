$(function () {

// burger menu
  (function ($) {
    $(".burger-button").click(function () {
      $(".menu").toggleClass("open");
    });
  })($);

  // Smooth scroll
  (function ($) {
    $(".menu__link").click(function () {
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top
      },1000);
      return false;
    });
  })($);

  // To top button
  (function ($) {
   const $top = $(".to-top");

    $(window).scroll(function () {
      $(this).scrollTop() > 100 ? $top.fadeIn('slow') : $top.fadeOut("slow");
    });

    $top.click(function () {
      $("html, body").animate({
        scrollTop: 0
      },1000);
      return false;
    })
  })($);

  // init responsive slider
  (function ($) {
    $(function() {
      $(".rslides").responsiveSlides({
        pager: true,           // Show pager, true or false
        pause: true,           // Pause on hover, true or false
      });
    });
  })($);


  // init fancybox 3
  (function ($) {
    $('[data-fancybox="images"]').fancybox();
  })($);
});
