// Navbar
function openMenu() {
  document.getElementById("sideMenu").classList.add("side-menu-open");
}

function closeMenu() {
  document.getElementById("sideMenu").classList.remove("side-menu-open");
}

// Vedio Section

window.addEventListener("load", function () {
  const video = document.querySelector(".background-video");

  video.addEventListener("click", function () {
    if (!video.paused) {
      video.pause();
    } else {
      video.play();
    }
  });
});

// News Slider
$(document).ready(function () {
  $(".news-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});


// Select the custom cursor element
const customCursor = document.querySelector('.custom-cursor');

// Update cursor position on mouse move
document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.pageX - customCursor.offsetWidth / 5}px`;
    customCursor.style.top = `${e.pageY - customCursor.offsetHeight / 5}px`;
});

// Add hover effect when mouse enters links or buttons
document.querySelectorAll('a, button').forEach((element) => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('hover');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('hover');
    });
});
