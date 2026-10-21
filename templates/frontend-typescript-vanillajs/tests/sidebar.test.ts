<% if (layout !== 'sidenav') { %>_SKIP_FILE_<% } else { %>
import { describe, it, expect, beforeEach } from 'vitest';
import { setupSidebar } from '../src/sidebar';

describe('Sidebar Module', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    document.body.innerHTML = '';
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  it('renders sidebar with project name and links', () => {
    setupSidebar(container);
    expect(container.querySelector('.sidebar')).not.toBeNull();
    expect(container.querySelector('.sidebar')?.textContent).toContain('<%= projectName %>');
    expect(container.querySelectorAll('.sidebar-link').length).toBe(<%= isFullstack ? 4 : 3 %>);
  });

  it('toggles mobile menu on menu button click', () => {
    setupSidebar(container);
    const menuBtn = container.querySelector('#menu-btn') as HTMLButtonElement;
    const mobileMenu = container.querySelector('#mobile-menu') as HTMLDivElement;

    expect(mobileMenu.style.display).toBe('none');
    menuBtn.click();
    expect(mobileMenu.style.display).toBe('flex');
    menuBtn.click();
    expect(mobileMenu.style.display).toBe('none');
  });

  it('toggles theme from the sidebar button', () => {
    setupSidebar(container);
    const before = document.documentElement.getAttribute('data-theme');
    (container.querySelector('#theme-toggle') as HTMLButtonElement).click();
    expect(document.documentElement.getAttribute('data-theme')).not.toBe(before);
  });
});
<% } %>
