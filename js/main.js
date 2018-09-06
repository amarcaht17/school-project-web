/*global $, jQuery, alert*/
$(document).ready(function () {

  'use strict';

  // ========================================================================= //
  //  SMOOTH SCROLL
  // ========================================================================= //

  $(document).ready(function () {
    // Smooth scroll na svim linkovima
    $("a").on('click', function (event) {

      if (this.hash !== "") {
        // spriječi default click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Koristimo jQuery animate() metodu da bi napravili smooth scroll
        // Broj (500) označava broj milisekundi potrebnih da bi skrolali do određenog dijela
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function () {

          // dodaj hash (#) na URL kad završimo skrolanje (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  // ========================================================================= //
  //  POKAZI NAVBAR PRI SKROLANJU
  // ========================================================================= //

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $("#main-nav, #main-nav-subpage").slideDown(400);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(400);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });

  // ========================================================================= //
  //  HAMBURGER MENU NA MOBILNIM UREDJAJIMA
  // ========================================================================= //


  $('.responsive').on('click', function (e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  TYPED.JS - JAVASCRIPT LIBRARY ZA ANIMIRANI NASLOV NA VRHU STRANICE
  // ========================================================================= //

  var typed = $(".typed");

  $(function () {
    typed.typed({
      strings: ["Amar Čahtarević", "UI/UX Dizajner"],
      typeSpeed: 100,
      loop: true,
    });
  });

  // ========================================================================= //
  //  ISOTOPE.JS - PORTFOLIO - GRUPISANJE SLIKA IZ PORTFOLIA
  // ========================================================================= //


  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
  });


  // ========================================================================= //
  //  MAGNIFIC POPUP PLUGIN - OTVARANJE SLIKE KLIKOM NA NJU (tzv. LIGHTBOX)
  // ========================================================================= //

  var magnifPopup = function () {
    $('.popup-img').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,

        duration: 300,
        easing: 'ease-in-out',

        opener: function (openerElement) {
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };


  // poziv funkcije
  magnifPopup();

});