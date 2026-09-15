import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavComponent],
  template: `
    <div class="layout-wrapper">
      <app-nav></app-nav>
      <main class="layout-main">
        <ng-content></ng-content>
      </main>
      <footer class="layout-footer">
        Built with TemplateGen &bull; Modern Full-Stack Scaffolding
      </footer>
    </div>
  `,
  styles: [`
    .layout-wrapper {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: var(--bg-color, #f8fafc);
      color: var(--text-primary, #0f172a);
      transition: background-color 0.2s, color 0.2s;
    }
    .layout-main {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem 1rem;
    }
    .layout-footer {
      width: 100%;
      border-top: 1px solid var(--border-color, #e2e8f0);
      padding: 1.5rem;
      text-align: center;
      font-size: 0.875rem;
      color: var(--text-secondary, #64748b);
    }
  `],
})
export class LayoutComponent {}
