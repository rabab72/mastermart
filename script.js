function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Example: Update Stars dynamically
const starsElements = document.querySelectorAll('.stars');

starsElements.forEach((stars, index) => {
    // Simulate dynamic reviews (example logic)
    const reviews = Math.floor(Math.random() * 10) + 1;
    stars.innerHTML = `⭐ ⭐ ⭐ ⭐ ⭐ (${reviews} reviews)`;
});



