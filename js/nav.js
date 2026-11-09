document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    const menu = nav.querySelector("ul");

    toggle.addEventListener("click", function () {
        menu.classList.toggle("show");
    });

    const navLinks = document.querySelectorAll("ul a[href^='#']");
    const sections = [...navLinks]
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    function setActive(id) {
        navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActive(entry.target.id);
            });
        },
        { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

});