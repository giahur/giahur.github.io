const PROJECTS = [
  { href: "/projects/interlinked", label: "Interlinked" },
  { href: "/projects/restoringhope", label: "Restoring Hope" },
  { href: "/projects/pizzasaucer", label: "Pizza Saucer" },
  { href: "/projects/configura", label: "Configura" },
  { href: "/projects/ultimate", label: "Ultimate" },
  { href: "/projects/ursamagus", label: "Ursa Magus" },
  { href: "/projects/stargazing", label: "Stargazing" },
];

const path = window.location.pathname.replace(/\.html$/, "").replace(/\/$/, "");
const onProjectPage = path.startsWith("/projects/");
const active = (href) => (path === href ? "active" : "");

const base = document.getElementById("home") ? "" : "/";
const navHTML = `
<nav>
  <a href="/"><img class="logo" src="/assets/gia.svg"
     title="Made by my friend Katelyn Park @katpar.art"></a>
  <div class="menu-toggle"><i class="fas fa-bars"></i></div>
  <ul>
    <li><a href="${base}#home">Home</a></li>
    <li class="show-dropdown">
      <a href="${base}#projects" class="${onProjectPage ? "active" : ""}">Projects</a>
      <div class="dropdown info-card">
        <ul>
          ${PROJECTS.map(p => `<li><a href="${p.href}" class="${active(p.href)}">${p.label}</a></li>`).join("")}
        </ul>
      </div>
    </li>
    <li><a href="${base}#about_me">About Me</a></li>
    <li><a href="${base}#contact">Contact Me</a></li>
  </ul>
  <div class="icons">
    <a href="mailto:giahur25@gmail.com" target="_blank" class="icon-link"><i class="fa-solid fa-envelope"></i></a>
    <a href="https://www.linkedin.com/in/giahur/" target="_blank" class="icon-link"><i class="fa-brands fa-linkedin"></i></a>
    <a href="https://github.com/giahur" target="_blank" class="icon-link"><i class="fa-brands fa-square-github"></i></a>
    <a href="https://giahur.itch.io/" target="_blank" class="icon-link"><i class="fa-brands fa-itch-io"></i></a>
  </div>
  <div>©2026 Gia Hur</div>
</nav>`;

document.querySelector("header").innerHTML = navHTML;

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
