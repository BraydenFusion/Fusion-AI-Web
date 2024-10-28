// JavaScript for Burger Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.getElementById("burgerIcon");
    const dropdownMenu = document.getElementById("dropdownMenu");

    // Toggle the dropdown and icon on click
    burgerIcon.addEventListener("click", function () {
        // Toggle 'active' class for dropdown menu visibility
        dropdownMenu.classList.toggle("active");
        
        // Toggle 'open' class for burger icon transform
        burgerIcon.classList.toggle("open");
    });
});