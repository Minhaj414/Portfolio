function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Sidebar hover effect
const buttons = document.getElementsByClassName('sidebar');

// IDs of all sections
const boxIds = ['profile', 'about', 'experience', 'contact', 'project', 'education'];
const boxes = boxIds.map(id => document.querySelector(`#${id}`));

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', () => {
        boxes.forEach(box => {
            if (box) box.style.marginLeft = '300px';
        });
    });

    buttons[i].addEventListener('mouseout', () => {
        boxes.forEach(box => {
            if (box) box.style.marginLeft = '150px';
        });
    });
}

// Contact form
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your message has been sent!');
    document.getElementById('successMessage').style.display = 'block';
    this.reset();
    setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
    }, 4000);
});

// Loading screen
document.addEventListener("DOMContentLoaded", () => {
    const isFirstVisit = localStorage.getItem("firstVisit") !== "false";
    const loadingScreen = document.querySelector(".loading-screen");
    const mainContent = document.querySelector(".main-content");

    if (isFirstVisit) {
        localStorage.setItem("firstVisit", "false");
        setTimeout(() => {
            loadingScreen.style.display = "none";
            mainContent.classList.remove("hidden");
        }, 3000); 
    } else {
        loadingScreen.style.display = "none";
        mainContent.classList.remove("hidden");
    }
});
// Smooth scroll for sidebar links
const sidebarLinks = document.querySelectorAll('.sidebar a');

sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
// Smooth scroll for footer links
const footerLinks = document.querySelectorAll('footer a');

footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
