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
const customCursor = document.querySelector(".custom-cursor");

// Update cursor position on mouse move
document.addEventListener("mousemove", (e) => {
  customCursor.style.left = `${e.pageX - customCursor.offsetWidth / 5}px`;
  customCursor.style.top = `${e.pageY - customCursor.offsetHeight / 5}px`;
});

// Add hover effect when mouse enters links or buttons
document.querySelectorAll("a, button").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    customCursor.classList.add("hover");
  });
  element.addEventListener("mouseleave", () => {
    customCursor.classList.remove("hover");
  });
});

// vedio
window.addEventListener("DOMContentLoaded", function () {
  const videoContainer = document.querySelector(".video-container");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoContainer.classList.add("fullscreen");
          videoContainer.classList.remove("hidden");
          videoContainer.style.maxWidth = "100%";
        } else {
          videoContainer.classList.add("hidden");
          videoContainer.classList.remove("fullscreen");
          videoContainer.style.maxWidth = "1200px";
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(videoContainer);
});

// Unlocking Section
window.addEventListener("scroll", function () {
  const section = document.querySelector(".unlocking-exceptional");
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top <= windowHeight * 0.8 && rect.bottom >= windowHeight * 0.2) {
    section.classList.add("scaled");
  } else {
    section.classList.remove("scaled");
  }
});

//Numbers
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const startCounting = (counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = Math.ceil(target / 100);

    const updateCount = () => {
      counter.classList.add("hidden");
      setTimeout(() => {
        count += increment;
        if (count >= target) {
          count = target;
        }
        counter.innerText = `+${count}K`;
        counter.classList.remove("hidden");

        if (count < target) {
          setTimeout(updateCount, 500);
        } else {
          setTimeout(() => {
            count = 0;
            updateCount();
          }, 2000);
        }
      }, 300);
    };

    updateCount();
  };

  counters.forEach((counter) => startCounting(counter));
});
