const slideContainer = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Change image every 3 seconds
setInterval(showNextImage, 3000);

// Hamburger menu toggle functionality
const ham = document.querySelector('.hamburger');
const navL = document.querySelector('.nav-links');

ham.addEventListener('click', () => {
    navL.classList.toggle('active');
});

// Theme toggle functionality
const theme = document.querySelector('.theme-toggle');
const body = document.body;

theme.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
