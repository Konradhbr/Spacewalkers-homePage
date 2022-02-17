$(document).ready(function () {
  //button animation
  $('.button').mouseover(function () {
    $('#shape-arrow').removeClass('hide');
    $('#shape').addClass('hide');
  });

  //open mobile menu
  // $('.menu').click(function () {
  //   $('.menu__mobile').addClass('menu__mobile--open');
  //   $('#shape').addClass('hide');
  // });

  //open mobile menu
  var menuButton = $('.menu__button'),
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

  window.addEventListener('scroll', function () {
    console.log('Asdasd');
    var header = document.querySelector('.nav');
    nav.classList.toggle('.nav--scrolling', window.scrollY > 0);
  });
  // $(window).scroll(function () {
  //   if ($(document).scrollTop() > 102) {
  //     console.log('działa');
  //     $('.nav').css({ 'background-color': 'black', position: 'fixed' });
  //   } else {
  //     console.log('asd');
  //   }
  // });

  // window.onscroll = function () {
  //   scrollNavbar();
  // };

  // function scrollNavbar() {
  //   if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
  //     console.log('ASdasd');
  //     document.getElementById('scrollNavbar').style.backgroundColor = 'black';
  //     document.getElementById('scrollNavbar').style.transition = '0.6s';
  //   } else {
  //     console.log('ASdasd');

  //     document.getElementById('scrollNavbar').style.backgroundColor = 'transparent';
  //   }

  //   //else {
  //   //     document.getElementById("scrollNavbar").style.top = "-50px";
  //   // }
  // }

  // window.onscroll = function () {
  //   var currentScrollPos = window.pageYOffset;

  //   // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
  //   if (currentScrollPos > 20) {
  //     // I am using 'display' instead of 'top':
  //     console.log('asdasdasdasd');
  //     document.getElementsByClassName('.nav').style.display = 'none';
  //   } else {
  //     console.log('asdasdasdasd');
  //     document.getElementById('nav-scroll').style.display = 'initial';
  //   }
  // };
});

// $(document).ready(function () {
//   //button hover
//   $('.menu').click(function () {
//     $('.menu__mobile').addClass('menu__mobile--open');
//     $('#shape').addClass('hide');
//   });
// });

// $(document).ready(function () {
//   var menuButton = $('.menu__button'),
//     mobileMenu = $('.menu__mobile'),
//     nav = $('.nav');

//   $(menuButton).click(function () {
//     if (!$(mobileMenu).hasClass('menu__mobile--active')) {
//       $(mobileMenu).addClass('menu__mobile--active');
//       $(nav).addClass('nav--active');
//     } else {
//       $(mobileMenu).removeClass('menu__mobile--active');
//       $(nav).removeClass('nav--active');
//     }
//   });
// });

// $(document).ready(function (e) {
//   // $('.carousel').flickity({
//   //   contain: true,
//   // });

//   //=============================
//   //  [Hero-carrousel (Top]
//   //=============================
//   var $carousel = $('.main-carousel').flickity({
//     contain: true,
//     pageDots: false,
//     prevNextButtons: false,
//   });

//   $('.button-group').on('click', '.button-carrousel', function () {
//     var index = $(this).index();
//     $carousel.flickity('select', index);
//   });
// });

// $(document).ready(function () {
//   $(window).scroll(function () {
//     if ($(document).scrollTop() > 102) {
//       console.log('działa');
//       $('.nav').css({ 'background-color': 'black', position: 'fixed' });
//     } else {
//       console.log('asd');
//     }
//   });
// });
$(document).ready(function (e) {
  window.onscroll = function () {
    console.log('Dsfsd');
    scrollNavbar();
  };

  function scrollNavbar() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      console.log('działa');

      $('.nav').style.backgroundColor = ' rgba(5, 9, 71, 255);';
      $('.nav').style.position = 'fixed';
    } else {
      console.log('asd');

      $('.nav').style.position = 'absolute';
    }

    //else {
    //     document.getElementById("scrollNavbar").style.top = "-50px";
    // }
  }
});
