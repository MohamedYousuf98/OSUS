// Navbar
function openMenu() {
  document.getElementById("sideMenu").classList.add("side-menu-open");
}

function closeMenu() {
  document.getElementById("sideMenu").classList.remove("side-menu-open");
}

// Dropdown Navbar
function toggleDropdown() {
  const dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.closest(".nav-item")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

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

window.addEventListener("DOMContentLoaded", function () {
  const videoContainer = document.querySelector(".video-container");

  videoContainer.classList.add("initial");

  let timeoutId;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          clearTimeout(timeoutId);

          if (!videoContainer.classList.contains("fullscreen")) {
            timeoutId = setTimeout(() => {
              videoContainer.classList.add("fullscreen");
              videoContainer.classList.remove("hidden");
              videoContainer.style.maxWidth = "100%";
            }, 3000);
          }
        } else {
          clearTimeout(timeoutId);
          videoContainer.classList.remove("fullscreen");
          videoContainer.classList.add("hidden");
          videoContainer.style.maxWidth = "1200px";
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(videoContainer);
});

// Unlocking Section
let timeoutId;

window.addEventListener("scroll", function () {
  const section = document.querySelector(".unlocking-exceptional");
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top <= windowHeight * 0.8 && rect.bottom >= windowHeight * 0.2) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      section.classList.add("scaled");
    }, 35);
  } else {
    clearTimeout(timeoutId);
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

// Tabs
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    document
      .querySelectorAll(".content")
      .forEach((content) => content.classList.remove("active"));
    document
      .getElementById(tab.getAttribute("data-tab"))
      .classList.add("active");
  });
});

toggleTab(0);

// All projects effect
window.addEventListener("scroll", function () {
  const parallaxImages = document.querySelectorAll(
    ".project-card img.project-img"
  );

  parallaxImages.forEach((img) => {
    const speed = 0.3;
    const offset = window.scrollY * speed;

    img.style.transform = `translate(-50%, -50%) scale(${1 + offset / 1000})`;
  });
});
