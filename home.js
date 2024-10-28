// Select elements
const items = document.querySelectorAll("[data-carousel-item]");
const indicators = document.querySelectorAll("[data-carousel-slide-to]");
let currentIndex = 0;

// Function to show the current slide
function showSlide(index) {
  // Hide all items
  items.forEach((item, i) => {
    item.classList.add("hidden");
    indicators[i].classList.remove("bg-blue-600"); // Reset indicators' color
  });

  // Show the current item
  items[index].classList.remove("hidden");
  indicators[index].classList.add("bg-blue-600"); // Highlight current indicator
}

// Function to go to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
}

// Function to go to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showSlide(currentIndex);
}

// Add event listeners for next/prev buttons
document
  .querySelector("[data-carousel-next]")
  .addEventListener("click", nextSlide);
document
  .querySelector("[data-carousel-prev]")
  .addEventListener("click", prevSlide);

// Add event listeners for indicators
indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", () => {
    currentIndex = i;
    showSlide(i);
  });
});

// Initial display of the first slide
showSlide(0);

// Optional: Auto-slide functionality

// Initialization for ES Users

document.addEventListener("DOMContentLoaded", function () {
  const revealText = document.getElementById("revealText");
  const testimonialSection = document.getElementById("testimonialSection");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation class when the section is visible
          revealText.classList.add("slide-in");
          // Stop observing once the animation has been triggered
          observer.unobserve(testimonialSection);
        }
      });
    },
    { threshold: 0.1 }
  ); // Trigger when 10% of the section is in view

  // Start observing the testimonial section
  observer.observe(testimonialSection);
});
const targets = [
    { element: document.getElementById("researchPaper"), count: 46, suffix: "+" },
    {
      element: document.getElementById("patents"),
      count: 80,
      suffix: "+",
    },
    {
      element: document.getElementById("projects"),
      count: 10,
      suffix: "+",
    },
  ];
  
  // Find the maximum count among all targets
  const maxCount = Math.max(...targets.map((target) => target.count));
  
  // Function to animate count-up effect
  function animateCountUp(target, duration) {
    let currentCount = 0;
    const increment = Math.ceil(target.count / (duration / 10));
  
    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= target.count) {
        clearInterval(interval);
        currentCount = target.count;
        target.element.textContent = currentCount + target.suffix;
      } else {
        target.element.textContent = currentCount;
      }
    }, 10);
  }
  
  // Increase the duration for a slower count effect
  const durationMultiplier = 300; // Adjust this multiplier to control speed
  targets.forEach((target) => {
    const targetDuration = (maxCount / 100) * durationMultiplier; // Set a slower duration based on max count
    animateCountUp(target, targetDuration);
  });
  
