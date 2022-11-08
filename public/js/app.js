$(document).ready(function () {
  $(".image-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    Infinity: true,
    arrows: true,
    draggable: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
      "<button type='button' class='image-slider-prev image-slider-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='image-slider-next image-slider-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".nav-slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
      "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });

  var offset = 800;
  var duration = 150;
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) $("#top-up").fadeIn(duration);
      else $("#top-up").fadeOut(duration);
    });
    $("#top-up").click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        duration
      );
    });
  });

  $(".loader").delay(0).fadeOut("slow");
  $("#overlayer").delay(0).fadeOut("slow");
});

function openpage(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openfeatues(evt, cityName) {
  var i, tabcontent_1, tablinks_1;
  tabcontent_1 = document.getElementsByClassName("tabcontent-1");
  for (i = 0; i < tabcontent_1.length; i++) {
    tabcontent_1[i].style.display = "none";
  }
  tablinks_1 = document.getElementsByClassName("tablinks-1");
  for (i = 0; i < tablinks_1.length; i++) {
    tablinks_1[i].className = tablinks_1[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

let nav = document.getElementById("nav");
let nav_mb = document.getElementById("nav_mb");
document.addEventListener("scroll", (event) => {
  if (window.scrollY > 100) {
    nav.classList.add("tofixed");
    nav_mb.classList.add("tofixed");
  } else {
    nav.classList.remove("tofixed");
    nav_mb.classList.remove("tofixed");
  }
});

var searchToggle = function () {
  $(".js-search-toggle").on("click", function (e) {
    e.preventDefault();
    if ($(".search-wrap").hasClass("active")) {
      $(".search-wrap").removeClass("active");
    } else {
      $(".search-wrap").addClass("active");
      setTimeout(function () {
        $("#s").focus();
      }, 50);
    }
  });
};
searchToggle();

function openNav() {
  document.getElementById("mySidenav").style.width = "60%";
  document.getElementById("modal_nav").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("modal_nav").style.display = "none";
}
