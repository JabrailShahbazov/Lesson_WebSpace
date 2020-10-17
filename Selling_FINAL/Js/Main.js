AOS.init({
    duration: 800,
    easing: 'slide',
    once: true
});


$(document).ready(function(){



  function NavbarScrollingEffect () {
    $("a").on('click', function(event) {

      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } // End if
    });
  }
  NavbarScrollingEffect()


  function NavbarToggle () {
    $(window).scroll(function(){
      if(this.scrollY > 100) {
  
        $(".navbar_my").addClass("stickya");
        $(".navbar_my").addClass("Fixed");
        
  
      }
  
      else{
        $(".navbar_my").removeClass("stickya");
        $(".navbar_my").removeClass("Fixed");
  
  
      }
    });
  
    $('.menu_toggler').click(function(){
      $(this).toggleClass("aktives");
      $(".navbar_menu").toggleClass("aktives");
    });
  }
  NavbarToggle()



  function siteCountDown() {
    $('#date-countdown').countdown('2020/7/9', function(event) {
      $(this).html(event.strftime(''
        + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
        + '<span class="countdown-block"><span class="label">%d</span> days </span>'
        + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
        + '<span class="countdown-block"><span class="label">%M</span> min </span>'
        + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
    });
            
};
siteCountDown();


function siteCarousel () {
    if ( $('.nonloop-block-13').length > 0 ) {
        $('.nonloop-block-13').owlCarousel({
        center: false,
        items: 1,
        loop: true,
            stagePadding: 0,
        margin: 0,
        autoplay: true,
        nav: true,
            navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
        responsive:{
        600:{
            margin: 0,
            nav: true,
          items: 2
        },
        1000:{
            margin: 0,
            stagePadding: 0,
            nav: true,
          items: 3
        },
        1200:{
            margin: 0,
            stagePadding: 0,
            nav: true,
          items: 4
        }
        }
        });
    }

    $('.slide-one-item').owlCarousel({
    center: false,
    items: 1,
    loop: true,
        stagePadding: 0,
    margin: 0,
    autoplay: true,
    pauseOnHover: false,
    nav: true,
    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
  });
};
siteCarousel();

});

