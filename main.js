window.addEventListener("load", () => {
  // if (
  //   window.location.pathname === "/"
  //   // ||
  //   // window.location.pathname === "/index.html" ||
  //   // window.location.pathname === "/temp/" ||
  //   // window.location.pathname === "/temp/index.html"
  // ) {
  document.body.style.overflow = "hidden";
  const heroSection = document.querySelector(".hero-section");
  let rippleCount = 0; // Initialize counter
  const imageContainer = document.querySelector(".image-container");
  const leftContent = document.querySelector(".left-content");
  const rightContent = document.querySelector(".right-content");
  const revealBgElements = document.querySelectorAll(".reveal-bg");
  const navbar = document.querySelector(".home-navbar");
  const interval = setInterval(() => {
    const ripple = document.createElement("div");
    ripple.className = "ripple";

    if (rippleCount === 0) {
      ripple.classList.add("blue-ripple");
    } else if (rippleCount === 1) {
      ripple.classList.add("white-ripple");
    } else if (rippleCount === 2) {
      ripple.classList.add("last-ripple");
    }

    heroSection.appendChild(ripple);

    if (rippleCount !== 2) {
      setTimeout(() => {
        ripple.remove(); // Remove only the first two ripples
      }, 4000); // Match the animation duration
    }

    rippleCount++; // Increment the counter

    if (rippleCount > 2) {
      clearInterval(interval); // Stop the interval after 3 ripples
      // After the last ripple ends, reveal the image
      setTimeout(() => {
        imageContainer.style.opacity = 1;
        imageContainer.style.transform = "translate(-50%, -50%) scaleX(.9)";
      }, 4000);
      setTimeout(() => {
        leftContent.style.opacity = 1;
        rightContent.style.opacity = 1;
        revealBgElements.forEach((element) => {
          element.classList.add("slide-out");
        });
      }, 4000);
      setTimeout(() => {
        navbar.style.opacity = 1;
        navbar.classList.add("slide-down");
      }, 5000);

      // Enable scrolling after the animation sequence ends
      setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 6000); // Adjust this timeout to match the total animation duration
    }
  }, 2000); // Adjust interval for new ripples
  // }
});
// $(window).on("load", function () {
//   $(".ripple-image").ripples({
//     resolution: 512,
//     perturbance: 0.01,
//   });
// });
var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: false,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
});
window.addEventListener("scroll", () => {
  AOS.init({
    duration: 1000, // Animation duration
    easing: "ease-in-out", // Easing function
    once: true, // Animation happens once
    offset: 100, // Offset for triggering the animation
  });
});
