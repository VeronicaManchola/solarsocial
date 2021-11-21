/* =================================
   LOADER                     
=================================== */
// makes sure the whole site is loaded
jQuery(window).on('load', function() {
        // will first fade out the loading animation
	jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(1000).fadeOut("slow");

    var target = window.location.hash;

    if(target) {
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 300);
    }
});

/* =================================
===  STICKY NAV                 ====
=================================== */

$(document).ready(function() {
  $('.main-navigation').onePageNav({
    scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
    filter: ':not(.external)',
    changeHash: true
  });
  
});


/* COLLAPSE NAVIGATION ON MOBILE AFTER CLICKING ON LINK - ADDED ON V1.5*/

if (window.innerWidth <= 480) {
    $('.main-navigation a').on('click', function () {
        $(".navbar-toggle").click();
    });
}


/* NAVIGATION VISIBLE ON SCROLL */

$(document).ready(function () {
    mainNav();
});

$(window).scroll(function () {
    mainNav();
});

if (window.innerWidth <= 767 || window.innerWidth >= 992) {
  function mainNav() {
        var top = document.documentElement.scrollTop;
        if (top > 40) $('.sticky-navigation').stop().animate({"top": '0'});

        else $('.sticky-navigation').stop().animate({"top": '-60'});
    }
}

if (window.innerWidth >= 768 && window.innerWidth <= 991) {
  function mainNav() {
        var top = document.documentElement.scrollTop;
        if (top > 40) $('.sticky-navigation').stop().animate({"top": '0'});

        else $('.sticky-navigation').stop().animate({"top": '-120'});
    }
}

/* =================================
===  FULL SCREEN HEADER         ====
=================================== */
function alturaMedia() {
  var altura = $(window).height() * 0.6;
  $(".mid-screen").css('min-height',altura);
  
}

$(document).ready(function() {
    alturaMedia();
  $(window).bind('resize', alturaMedia);
});

/* =================================
===  WOW ANIMATION             ====
=================================== */
wow = new WOW(
  {
    mobile: false
  });
wow.init();


/* =================================
===  SUBSCRIPTION FORM          ====
=================================== */
$("#contact").submit(function (e) {
    e.preventDefault();

    var email = $("#email").val();
    var dataString = $('#contact').serializeArray();

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };

    if (isValidEmail(email)) {
        $.ajax({
            type: "POST",
            url: "send.php",
            data: dataString,
            success: function () {
                $('.success').fadeIn(1000);
                $('.error').fadeOut(500);
                $('.hide-after').fadeOut(500);
            }
        });
    } else {
        $('.error').fadeIn(1000);
    }

    return false;
});

/* =================================
===  Bootstrap Internet Explorer 10 in Windows 8 and Windows Phone 8 FIX
=================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}

/* ======================================
    IsotopeJS
========================================== */

var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    resize: true,
    masonry: {
        columnWidth: '.grid-sizer',
        gutter: 5
    }
});
// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
});

$(window).resize(function () {
    $grid.imagesLoaded(function () {
        setTimeout(function () {
            $grid.find('.grid-item').removeClass('wow').removeClass('animated'); // avoid problem to filter after window resize
            $grid.isotope('layout');
        }, 300);
    });
});