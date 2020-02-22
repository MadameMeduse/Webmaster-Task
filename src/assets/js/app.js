//-----> Smooth scrolling the links

// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 2500,
  left: 0,
  behavior: "smooth"
});

// Scroll certain amounts from current position
window.scrollBy({
  top: 100, // could be negative value
  left: 0,
  behavior: "smooth"
});

// Scroll to a certain element
// document.querySelector(".section").scrollIntoView({
//   behavior: "smooth"
// });

// Slick -------------->
$(".responsive-slick").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: "unslick"
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(".open-mobile-menu").click(function() {
  $(".center1").hide();
});

$(".close-mobile-menu").click(function() {
  $(".center1").show("slow", function() {
    // Animation complete.
  });
});
