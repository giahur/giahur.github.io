document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    const menu = nav.querySelector("ul");

    toggle.addEventListener("click", function () {
        menu.classList.toggle("show");
    });
});