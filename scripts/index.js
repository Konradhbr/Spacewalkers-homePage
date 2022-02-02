$(document).ready(function () {
  //button hover
  $('.button').mouseover(
    function () {
      $('#shape-arrow').removeClass('hide');
      $('#shape').addClass('hide');
    },
    // function () {
    //   $('#shape').hide();
    // },
  );
});

//flickity carousel
// $(document).ready(function (e) {
//   $('.carousel').flickity({
//     contain: true,
//   });

//   //=============================
//   //  [Hero-carrousel (Top]
//   //=============================
//   var $carousel = $('.main-carousel').flickity();

//   $('.button-group').on('click', '.button-carrousel', function () {
//     var index = $(this).index();
//     $carousel.flickity('select', index);
//   });

//   $('.previous-button').on('click', () => {
//     $carousel.flickity('previous');
//   });

//   $('.next-button').on('click', () => {
//     $carousel.flickity('next');
//   });
// });
