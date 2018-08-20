$(function() {

  var width = 390;
  var animationSpeed = 300;
  var pause = 3000;
  var currentSlide = 1;

  //cache DOM
  var $slider = $('#testimonials-list');
  var $slideContainer = $slider.find('.testimonial-item', $slider);
  var $slides = $slideContainer.find('.item', $slider);
  var interval;

  function startSlider() {
    interval = setInterval(function() {
      $slideContainer.animate({'margin-left' : '-='+width}, animationSpeed, function() {
        if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
        }

      });
    }, pause);
  }

  function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();
  //setInterval
    //animate margin-left
      //if last-slide, go to position 1 = 0px;

  //mouse and pause
  //resume on mouseleave
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


// Responsive navigasi
$(document).ready(function() {
  var element = document.getElementById("testt");
  $('.menu-toggle').click(function() {
    element.classList.toggle("active");
  })
})
