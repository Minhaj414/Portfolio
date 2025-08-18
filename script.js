function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


// Get the button and the first box
// Select all elements with the class 'sidebar'
const buttons = document.getElementsByClassName('sidebar');

// Select the element with the id 'profile'
const firstBox = document.querySelector('#profile');

// Iterate over each button in the 'sidebar' class to add event listeners
for (let i = 0; i < buttons.length; i++) {
    // Add event listener for mouseover (button hover)
    buttons[i].addEventListener('mouseover', function () {
        firstBox.style.marginLeft = '300px'; // Apply margin-left to the first box when hovering over the button
    });

    // Add event listener for mouseout (button unhover)
    buttons[i].addEventListener('mouseout', function () {
        firstBox.style.marginLeft = '150px'; // Reset margin-left when not hovering over the button
    });
}
// Select all elements with the class 'sidebar'

// Select the element with the id 'profile'
const firstBox1 = document.querySelector('#about');

// Iterate over each button in the 'sidebar' class to add event listeners
for (let i = 0; i < buttons.length; i++) {
    // Add event listener for mouseover (button hover)
    buttons[i].addEventListener('mouseover', function () {
        firstBox1.style.marginLeft = '300px'; // Apply margin-left to the first box when hovering over the button
    });

    // Add event listener for mouseout (button unhover)
    buttons[i].addEventListener('mouseout', function () {
        firstBox1.style.marginLeft = '150px'; // Reset margin-left when not hovering over the button
    });
}

// Select all elements with the class 'sidebar'

// Select the element with the id 'profile'
const firstBox2 = document.querySelector('#experience');

// Iterate over each button in the 'sidebar' class to add event listeners
for (let i = 0; i < buttons.length; i++) {
    // Add event listener for mouseover (button hover)
    buttons[i].addEventListener('mouseover', function () {
        firstBox2.style.marginLeft = '300px'; // Apply margin-left to the first box when hovering over the button
    });

    // Add event listener for mouseout (button unhover)
    buttons[i].addEventListener('mouseout', function () {
        firstBox2.style.marginLeft = '150px'; // Reset margin-left when not hovering over the button
    });
}

// Select all elements with the class 'sidebar'

// Select the element with the id 'profile'
const firstBox3 = document.querySelector('#contact');

// Iterate over each button in the 'sidebar' class to add event listeners
for (let i = 0; i < buttons.length; i++) {
    // Add event listener for mouseover (button hover)
    buttons[i].addEventListener('mouseover', function () {
        firstBox3.style.marginLeft = '300px'; // Apply margin-left to the first box when hovering over the button
    });

    // Add event listener for mouseout (button unhover)
    buttons[i].addEventListener('mouseout', function () {
        firstBox3.style.marginLeft = '150px'; // Reset margin-left when not hovering over the button
    });
}

// Select all elements with the class 'sidebar'

// Select the element with the id 'profile'
const firstBox4 = document.querySelector('#project');

// Iterate over each button in the 'sidebar' class to add event listeners
for (let i = 0; i < buttons.length; i++) {
    // Add event listener for mouseover (button hover)
    buttons[i].addEventListener('mouseover', function () {
        firstBox4.style.marginLeft = '300px'; // Apply margin-left to the first box when hovering over the button
    });

    // Add event listener for mouseout (button unhover)
    buttons[i].addEventListener('mouseout', function () {
        firstBox4.style.marginLeft = '150px'; // Reset margin-left when not hovering over the button
    });
}

// Select all elements with the class 'sidebar'

// Select the element with the id 'profile'
const firstBox6 = document.querySelector('#education');

// Iterate over each button in the 'sidebar' class to add event listeners
for (let i = 0; i < buttons.length; i++) {
    // Add event listener for mouseover (button hover)
    buttons[i].addEventListener('mouseover', function () {
        firstBox6.style.marginLeft = '300px'; // Apply margin-left to the first box when hovering over the button
    });

    // Add event listener for mouseout (button unhover)
    buttons[i].addEventListener('mouseout', function () {
        firstBox6.style.marginLeft = '150px'; // Reset margin-left when not hovering over the button
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
