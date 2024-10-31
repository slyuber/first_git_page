// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Implement form submission logic here
    alert('Thank you for your message!');
});
