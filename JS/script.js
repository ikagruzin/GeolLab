$(document).ready(function() {
  $("#login").on("click", function() {
     $("#popup").fadeIn();
  });
  $("#close-popup").on("click", function() {
     $("#popup").fadeOut();
  });
});
