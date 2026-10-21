import { Component } from '@angular/core';
<% if (layout === 'sidenav') { %>
import { SidebarComponent } from '../sidebar/sidebar.component';
<% } else { %>
import { NavComponent } from '../nav/nav.component';
<% } %>

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [<%= layout === 'sidenav' ? 'SidebarComponent' : 'NavComponent' %>],
  template: `
<% if (layout === 'sidenav') { %>
    <div class="layout-wrapper layout-sidenav">
      <app-sidebar></app-sidebar>
      <div class="layout-content">
        <main class="layout-main">
          <ng-content></ng-content>
        </main>
        <footer class="layout-footer">
          Built with TemplateGen &bull; Modern Full-Stack Scaffolding
        </footer>
      </div>
    </div>
<% } else { %>
    <div class="layout-wrapper">
      <app-nav></app-nav>
      <main class="layout-main">
        <ng-content></ng-content>
      </main>
      <footer class="layout-footer">
        Built with TemplateGen &bull; Modern Full-Stack Scaffolding
      </footer>
    </div>
<% } %>
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
<% if (layout === 'sidenav') { %>
    .layout-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    @media (min-width: 768px) {
      .layout-sidenav {
        flex-direction: row;
      }
    }
<% } %>
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
