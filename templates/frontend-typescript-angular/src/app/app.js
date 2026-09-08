import { Component, signal } from '@angular/core';
@Component({
    selector: 'app-root',
    styleUrl: './app.css',
    templateUrl: './app.html',
    standalone: true,
})
export class App {
    title = signal('<%= projectName %>');
    count = signal(0);
    increment() {
        this.count.update((c) => c + 1);
    }
}
//# sourceMappingURL=app.js.map