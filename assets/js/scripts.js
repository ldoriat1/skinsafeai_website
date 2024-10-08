/* assets/js/scripts.js */

/* Smooth Scrolling for Navigation Links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }

    // Close the navbar on mobile after clicking a link
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

/* Responsive Navigation Toggle */
const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}