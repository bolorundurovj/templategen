import { Component, signal, inject, effect } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { StorageService } from './services/storage.service';
<% if (isFullstack) { %>import { ItemsCrudComponent } from './components/items-crud/items-crud.component';<% } %>

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  standalone: true,
  imports: [LayoutComponent<% if (isFullstack) { %>, ItemsCrudComponent<% } %>],
})
export class App {
  private readonly storage = inject(StorageService);

  readonly title = signal('<%= projectName %>');
  readonly count = signal<number>(this.storage.getItem('app-count', 0));

  constructor() {
    effect(() => {
      this.storage.setItem('app-count', this.count());
    });
  }

  increment(): void {
    this.count.update((c) => c + 1);
  }
}
