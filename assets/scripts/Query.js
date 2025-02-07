// scroll tab

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $("#body-scroll").addClass("scrolled");
  } else {
    $("#body-scroll").removeClass("scrolled");
  }
});

// Hamburger menu animated

function menuBtnFunction(menuBtn) {
  menuBtn.classList.toggle("active");
}

// slider testimonials

var $slickEl = $(".center");
var $slickE2 = $(".Clogo");

$slickEl.slick({
  centerMode: true,
  slidesToShow: 3,
  focusOnSelect: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 3,
  infinite: true,

  responsive: [
    {
      breakpoint: 1199.98,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768.98,
      settings: {
        arrows: false,
        centerMode: false,
        autoplaySpeed: 5000,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480.98,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

$slickE2.slick({
  centerMode: false,
  slidesToShow: 5,
  focusOnSelect: true,
  arrows: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToScroll: 1,
  infinite: true,

  responsive: [
    {
      breakpoint: 1649.98,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "40px",
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1199.98,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "40px",
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 991.98,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768.98,
      settings: {
        arrows: false,
        centerMode: false,
        autoplaySpeed: 5000,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480.98,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

// counter

let count = document.querySelectorAll(".count");
let arr = Array.from(count);

arr.map(function (item) {
  let startnumber = 0;

  function counterup() {
    startnumber++;
    item.innerHTML = startnumber;

    if (startnumber == item.dataset.number) {
      clearInterval(stop);
    }
  }

  let stop = setInterval(function () {
    counterup();
  }, 5);
});

// Show HTML element
Fancybox.show([{ src: "#dialog-content", type: "inline" }]);

// Show a copy of the element
Fancybox.show([{ src: "#dialog-content", type: "clone" }]);
