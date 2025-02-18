// Showing navbar when click menu on mobile view
const mobile = document.querySelector('.menu-toggle');
const mobileLink = document.querySelector('.sidebar');

mobile.addEventListener("click", function() {
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
});

// Close menu when click
mobileLink.addEventListener("click", function() {
    const menuBars = document.querySelector(".is-active");
    if (window.innerWidth <= 768 && menuBars) {
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    }
});

// Move the menu to right and left when click back and next
var step = 100;
var stepFilter = 60;
var scrolling = true;

$(".back").bind("click", function(e) {
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    });
});

$(".next").bind("click", function(e) {
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "+=" + step + "px"
    });
});

// When click back and next on menu filters
$(".back-menus").bind("click", function(e) {
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "-=" + stepFilter + "px"
    });
});

$(".next-menus").bind("click", function(e) {
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "+=" + stepFilter + "px"
    });
});

// Order Tracking Logic
let currentStatus = 0; // Start with the first status
const statuses = document.querySelectorAll('.status-item');
const trackButton = document.getElementById('track-order');

trackButton.addEventListener('click', function() {
    // Reset all statuses
    statuses.forEach(status => {
        status.classList.remove('active');
    });

    // Set the default status to "Preparation"
    currentStatus = 0; // Reset to the first status
    statuses[currentStatus].classList.add('active'); // Set "Preparation" as active

    // Simulate order tracking
    const interval = setInterval(() => {
        currentStatus++; // Move to the next status
        if (currentStatus < statuses.length) {
            statuses[currentStatus].classList.add('active');
        } else {
            clearInterval(interval); // Stop the interval when all statuses are shown
        }
    }, 120000); // Update every 2 minutes (120,000 milliseconds)
});