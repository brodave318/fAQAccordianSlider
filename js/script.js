// Accordian
var action = "click";
var speed = "500";

$(document).ready(function() {
  $('li.q').on('click', function() {
    // Get next element
    $(this).next()
      .slideToggle(speed)
        // Select all other answers
        .siblings('li.a')
          .slideUp();
    // Get image for active question
    var img = $(this).children('img');
    // Remove thev'rotate for all images except the active
    $('img').not(img).removeClass('rotate');
    // Toggle rotate class
    img.toggleClass('rotate');      
  });
});
