function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Select all sidebar buttons
const buttons = document.getElementsByClassName('sidebar');

// IDs of all boxes you want to shift
const boxIds = ['profile', 'about', 'experience', 'contact', 'project', 'education'];

// Convert IDs to actual DOM elements
const boxes = boxIds.map(id => document.querySelector(`#${id}`));

// Iterate over sidebar buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', function () {
        boxes.forEach(box => {
            if (box) box.style.marginLeft = '300px';
        });
    });

    buttons[i].addEventListener('mouseout', function () {
        boxes.forEach(box => {
            if (box) box.style.marginLeft = '150px';
        });
    });
}

// Contact form functionality
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your message has been sent!');
    document.getElementById('successMessage').style.display = 'block';
    this.reset();
    setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
    }, 4000);
});

// Loading screen functionality
document.addEventListener("DOMContentLoaded", () => {
    const isFirstVisit = localStorage.getItem("firstVisit") !== "false";
    const loadingScreen = document.querySelector(".loading-screen");
    const mainContent = document.querySelector(".main-content");

    if (isFirstVisit) {
        localStorage.setItem("firstVisit", "false");
        setTimeout(() => {
            loadingScreen.style.display = "none";
            mainContent.classList.remove("hidden");
        }, 3000); // Delay for 3 seconds
    } else {
        // Skip loading animation for returning users
        loadingScreen.style.display = "none";
        mainContent.classList.remove("hidden");
    }
});
