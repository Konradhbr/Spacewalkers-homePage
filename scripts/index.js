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
