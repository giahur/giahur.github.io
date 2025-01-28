function toggleMenu() {
    document.getElementById("nav-bar").classList.toggle("active");
}

const hamburger = document.querySelector('.hamburger-menu');
hamburger.addEventListener('click', toggleMenu);