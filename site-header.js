class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav>
          <a href="/index"><img class="logo" src="/assets/gia.svg"
              title="Made by my friend Katelyn Park @katpar.art"></a>
          <div class="menu-toggle"><i class="fas fa-bars"></i></div>
          <ul>
            <li><a href="/#home">Home</a></li>
            <li class="show-dropdown"><a href="/#projects">Projects</a>
              <div class="dropdown info-card">
                <ul>
                  <li><a href="/projects/interlinked">Interlinked</a></li>
                  <li><a href="/projects/restoringhope">Restoring Hope</a></li>
                  <li><a href="/projects/pizzasaucer">Pizza Saucer</a></li>
                  <li><a href="/projects/configura">Configura</a></li>
                  <li><a href="/projects/ultimate">Ultimate</a></li>
                  <li><a href="/projects/ursamagus">Ursa Magus</a></li>
                  <li><a href="/projects/stargazing">Stargazing</a></li>
                </ul>
              </div>
            </li>
            <li><a href="/#about_me">About Me</a></li>
            <li><a href="/#contact">Contact Me</a></li>
          </ul>
          <div class="icons">
            <a href="mailto:giahur25@gmail.com" target="_blank" class="icon-link">
              <i class="fa-solid fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/giahur/" target="_blank" class="icon-link">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/giahur" target="_blank" class="icon-link">
              <i class="fa-brands fa-square-github"></i>
            </a>
            <a href="https://giahur.itch.io/" target="_blank" class="icon-link">
              <i class="fa-brands fa-itch-io"></i>
            </a>
          </div>
          <div>©2026 Gia Hur</div>
        </nav>
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);