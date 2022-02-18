$(document).ready(function () {
  //button animation
  $('.button').mouseover(function () {
    $('#shape-arrow').removeClass('hide');
    $('#shape').addClass('hide');
  });

  // window.addEventListener('scroll', function () {
  //   console.log('Asdasd');
  //   var header = document.querySelector('.nav');
  //   nav.classList.toggle('nav--scrolling', window.scrollY > 0);
  // });

  //open mobile menu
  // $('.menu').click(function () {
  //   $('.menu__mobile').addClass('menu__mobile--open');
  //   $('#shape').addClass('hide');
  // });

  //open mobile menu
  var menuButton = $('#menu__toggle'),
    mobileMenu = $('.menu__mobile'),
    nav = $('.nav');

  $(menuButton).click(function () {
    if (!$(mobileMenu).hasClass('menu__mobile--active')) {
      $(mobileMenu).addClass('menu__mobile--active');
      $(nav).addClass('nav--active');
    } else {
      $(mobileMenu).removeClass('menu__mobile--active');
      $(nav).removeClass('nav--active');
    }
  });

  //=============================
  //  [Hero-carrousel (Top]
  //=============================
  var $carousel = $('.main-carousel').flickity({
    contain: true,
    pageDots: false,
    prevNextButtons: false,
  });

  $('.button-group').on('click', '.button-carrousel', function () {
    var index = $(this).index();
    $carousel.flickity('select', index);
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $('.nav').addClass('nav--scrolling');
    } else {
      $('.nav').removeClass('nav--scrolling');
    }
  });

  document.addEventListener(
    'scroll',
    function (event) {
      var scroll = document.scrollingElement.scrollTop;

      console.log(scroll);
      // if (scroll >= 100) {
      //   $('.nav').addClass('nav--scrolling');
      // } else {
      //   $('.nav').removeClass('nav--scrolling');
      // }
    },
    true /*Capture event*/,
  );
});

// $(document).ready(function () {
//   $(window).scroll(function () {
//     var scroll = $(window).scrollTop();

//     if (scroll >= 100) {
//       $('.nav').addClass('nav--scrolling');
//     } else {
//       $('.nav').removeClass('nav--scrolling');
//     }
//   });
// });
