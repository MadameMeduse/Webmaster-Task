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

$;
$(".center1").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1
      }
    }
  ]
});
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object

// document.getElementsByClassName("slick-active")[1].style.transform =
//   "scale(1.2)";

$(".open-mobile-menu").click(function() {
  $(".center1").hide();
});

$(".close-mobile-menu").click(function() {
  $(".center1").show("slow", function() {
    // Animation complete.
  });
});
