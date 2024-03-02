document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.querySelector(".menu-icon");
    var navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
