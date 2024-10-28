// script.js
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".process-buttons button");
    const contentSections = document.querySelectorAll(".content");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove("active"));
        // Add active class to clicked button
        button.classList.add("active");
  
        // Hide all content sections
        contentSections.forEach(section => section.classList.remove("active"));
        // Show the selected content
        const contentId = button.id.split("-")[0]; // Gets 'discover', 'plan', or 'execute'
        document.getElementById(contentId).classList.add("active");
      });
    });
  
    // Set the initial active section
    document.getElementById("discover").classList.add("active");
  });