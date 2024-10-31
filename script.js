// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
});

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Sticky Navigation Bar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Lottie Animation Initialization
// (No additional JS needed if using <lottie-player> element)

// Optional: Implement Interactive Timeline
// You can use libraries like vis.js or TimelineJS

// Optional: Form Submission Handling
// Add your form submission logic here
