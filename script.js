// Select Elements
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;


// Mobile Hamburger Menu Toggle
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu after clicking any navigation link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// Dark & Light Mode Toggle
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    // Change icon
    if (body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});