import { describe, it, expect, beforeEach } from 'vitest';
import { setupNavigation } from '../src/nav';

describe('Navigation Module', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    document.body.innerHTML = '';
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  it('renders navigation header with links', () => {
    setupNavigation(container);
    expect(container.querySelector('.nav-header')).not.toBeNull();
    expect(container.querySelector('.desktop-nav')).not.toBeNull();
    expect(container.querySelectorAll('.nav-link').length).toBe(3);
  });

  it('toggles mobile menu on menu button click', () => {
    setupNavigation(container);
    const menuBtn = container.querySelector('#menu-btn') as HTMLButtonElement;
    const mobileMenu = container.querySelector('#mobile-menu') as HTMLDivElement;

    expect(mobileMenu.style.display).toBe('none');
    menuBtn.click();
    expect(mobileMenu.style.display).toBe('flex');
    menuBtn.click();
    expect(mobileMenu.style.display).toBe('none');
  });
});
