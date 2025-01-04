function validateForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "" || password === "") {
      alert("Please fill in both fields.");
      return false; // Prevents the form from submitting if fields are empty
  }
  return true; // Allows form submission if both fields are filled
}

document.addEventListener("DOMContentLoaded", () => {
  // Function to dynamically group images for a carousel
  const setupCarousel = (carouselId, screenSizes) => {
      const carousel = document.querySelector(`#${carouselId} .carousel-inner`);
      const images = Array.from(carousel.querySelectorAll(".col")); // Get all image containers

      const getImagesPerSlide = () => {
          const width = window.innerWidth;
          if (width < 576) return screenSizes.phone; // Phones
          if (width < 992) return screenSizes.tablet; // Tablets
          return screenSizes.desktop; // Desktops
      };

      const groupImages = () => {
          const imagesPerSlide = getImagesPerSlide();
          const slides = [];
          for (let i = 0; i < images.length; i += imagesPerSlide) {
              const slide = document.createElement("div");
              slide.classList.add("carousel-item");
              if (i === 0) slide.classList.add("active"); // Make the first slide active

              const row = document.createElement("div");
              row.classList.add("row");
              for (let j = i; j < i + imagesPerSlide && j < images.length; j++) {
                  row.appendChild(images[j]);
              }
              slide.appendChild(row);
              slides.push(slide);
          }

          // Clear and add new slides
          carousel.innerHTML = "";
          slides.forEach((slide) => carousel.appendChild(slide));
      };

      // Group images on load
      groupImages();

      // Regroup images on window resize
      window.addEventListener("resize", groupImages);
  };

  // Setup independent carousels
  setupCarousel("tourCarousel", { desktop: 4, tablet: 3, phone: 2 });
  setupCarousel("eventsCarousel", { desktop: 4, tablet: 3, phone: 2 });
  setupCarousel("coursesCarousel", { desktop: 4, tablet: 3, phone: 2 }); // New La Liga carousel
});

document.addEventListener("scroll", () => {
    const videoSection = document.querySelector(".sticky-video");
    const offset = videoSection.getBoundingClientRect().top;

    if (offset <= 0) {
        videoSection.style.position = "fixed";
        videoSection.style.top = "0";
    } else {
        videoSection.style.position = "relative";
        videoSection.style.top = "auto";
    }
});



  

