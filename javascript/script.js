// Form Validation
function validateForm() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (!username || !password) {
        alert("Please fill in both fields.");
        return false;
    }
  
    if (username.length < 3) {
        alert("Username must be at least 3 characters long.");
        return false;
    }
  
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
  
    return true;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // Debounce Helper
    const debounce = (func, delay = 300) => {
      let timeout;
      return (...args) => {
          clearTimeout(timeout);
          timeout = setTimeout(() => func(...args), delay);
      };
    };
  
    // Carousel Setup
    const setupCarousel = (carouselId, screenSizes) => {
        const carousel = document.querySelector(`#${carouselId} .carousel-inner`);
        const images = Array.from(carousel.querySelectorAll(".col"));
  
        const getImagesPerSlide = () => {
            const width = window.innerWidth;
            if (width < 576) return screenSizes.phone;
            if (width < 992) return screenSizes.tablet;
            return screenSizes.desktop;
        };
  
        const groupImages = () => {
            const imagesPerSlide = getImagesPerSlide();
            const slides = [];
            for (let i = 0; i < images.length; i += imagesPerSlide) {
                const slide = document.createElement("div");
                slide.classList.add("carousel-item");
                if (i === 0) slide.classList.add("active");
  
                const row = document.createElement("div");
                row.classList.add("row");
                for (let j = i; j < i + imagesPerSlide && j < images.length; j++) {
                    row.appendChild(images[j]);
                }
                slide.appendChild(row);
                slides.push(slide);
            }
  
            carousel.innerHTML = "";
            slides.forEach((slide) => carousel.appendChild(slide));
        };
  
        groupImages();
        window.addEventListener("resize", debounce(groupImages));
    };
  
    setupCarousel("tourCarousel", { desktop: 4, tablet: 3, phone: 2 });
    setupCarousel("eventsCarousel", { desktop: 4, tablet: 3, phone: 2 });
    setupCarousel("coursesCarousel", { desktop: 4, tablet: 3, phone: 2 });
  
    // Sticky Video Section
    const videoSection = document.querySelector(".sticky-video");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                videoSection.style.position = "relative";
                videoSection.style.top = "auto";
            } else {
                videoSection.style.position = "fixed";
                videoSection.style.top = "0";
            }
        });
    });
  
    observer.observe(videoSection);
  });
  