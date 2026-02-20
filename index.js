// Change navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#000000';
        navbar.style.padding = '10px 0';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.padding = '20px 0';
    }
});

// Mobile Menu Toggle (Basic logic)
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    // In a production site, you'd toggle a CSS class here
    alert("Mobile menu clicked! (Integrate a slide-out menu here)");
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});