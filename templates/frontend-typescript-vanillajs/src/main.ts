import './style.css';
import heroImg from './assets/hero.png';
import typescriptLogo from './assets/typescript.svg';
import viteLogo from './assets/vite.svg';
import { setupCounter } from './counter';
import { setupNavigation } from './nav';
<% if (isFullstack) { %>import { setupItemsCrud } from './items';<% } %>

const app = document.querySelector<HTMLDivElement>('#app')!;

function renderView(): void {
  const isItems = window.location.hash.includes('items');

  if (isItems) {
    app.innerHTML = `
      <div id="nav-wrapper"></div>
      <section id="center" style="max-width: 600px; margin: 2rem auto; padding: 0 1rem; width: 100%;">
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-bottom: 1.5rem;">
          <a href="#" style="color: #0d9488; text-decoration: none; font-weight: 500; font-size: 0.875rem;">&larr; Back to Home</a>
          <span style="background: rgba(13, 148, 136, 0.15); color: #0d9488; font-size: 0.75rem; font-weight: 600; padding: 0.25rem 0.75rem; border-radius: 9999px; text-transform: uppercase;">Fullstack CRUD</span>
        </div>
        <% if (isFullstack) { %>
        <div id="crud-wrapper"></div>
        <% } %>
      </section>
      <footer class="site-footer">
        Built with TemplateGen &bull; Modern Full-Stack Scaffolding
      </footer>
    `;
    setupNavigation(document.querySelector<HTMLDivElement>('#nav-wrapper')!);
    <% if (isFullstack) { %>
    const crudEl = document.querySelector<HTMLDivElement>('#crud-wrapper');
    if (crudEl) setupItemsCrud(crudEl);
    <% } %>
  } else {
    app.innerHTML = `
      <div id="nav-wrapper"></div>

      <section id="center">
        <div class="hero">
          <img src="${heroImg}" class="base" width="170" height="179">
          <img src="${typescriptLogo}" class="framework" alt="TypeScript logo"/>
          <img src="${viteLogo}" class="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Welcome to <%= projectName %></h1>
          <p>Edit <code>src/main.ts</code> and save to test <code>HMR</code> with theming & responsive navigation</p>
        </div>
        <button id="counter" type="button" class="counter"></button>
      </section>

      <div class="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#documentation-icon"></use></svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img class="logo" src="${viteLogo}" alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://www.typescriptlang.org" target="_blank">
                <img class="button-icon" src="${typescriptLogo}" alt="">
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li><a href="https://github.com/vitejs/vite" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
            <li><a href="https://chat.vite.dev/" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#discord-icon"></use></svg>Discord</a></li>
            <li><a href="https://x.com/vite_js" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#x-icon"></use></svg>X.com</a></li>
            <li><a href="https://bsky.app/profile/vite.dev" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#bluesky-icon"></use></svg>Bluesky</a></li>
          </ul>
        </div>
      </section>

      <footer class="site-footer">
        Built with TemplateGen &bull; Modern Full-Stack Scaffolding
      </footer>
    `;
    setupNavigation(document.querySelector<HTMLDivElement>('#nav-wrapper')!);
    setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
  }
}

renderView();
window.addEventListener('hashchange', renderView);
