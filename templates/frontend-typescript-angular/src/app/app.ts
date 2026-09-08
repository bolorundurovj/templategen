import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  standalone: true,
})
export class App {
  readonly title = signal('<%= projectName %>');
  readonly count = signal(0);

  increment(): void {
    this.count.update((c) => c + 1);
  }
}
