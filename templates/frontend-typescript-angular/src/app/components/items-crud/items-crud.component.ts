<% if (!isFullstack) { %>_SKIP_FILE_<% } else { %>
import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsService, type Item } from '../../services/items.service';

@Component({
  selector: 'app-items-crud',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card crud-card">
      <div class="crud-header">
        <div class="header-left">
          <span class="status-dot"></span>
          <h3 class="card-title">Fullstack CRUD API</h3>
        </div>
        <span class="api-badge">{{ apiBase }}</span>
      </div>

      <div *ngIf="error()" class="error-banner">
        {{ error() }}
      </div>

      <form (submit)="handleAdd($event)" class="form-row">
        <input
          type="text"
          [value]="title()"
          (input)="onInput($event)"
          placeholder="New item title..."
          class="input-text"
        />
        <button type="submit" [disabled]="!title().trim()" class="btn-submit">
          Add
        </button>
      </form>

      <div class="items-list">
        <p *ngIf="loading()" class="empty-text">Loading items...</p>
        <p *ngIf="!loading() && items().length === 0" class="empty-text">No items yet. Add one above!</p>
        <div *ngFor="let item of items()" class="item-row">
          <label class="item-label">
            <input
              type="checkbox"
              [checked]="item.completed"
              (change)="handleToggle(item)"
              class="checkbox"
            />
            <span [class.completed-text]="item.completed" [class.item-text]="!item.completed">
              {{ item.title }}
            </span>
          </label>
          <button
            type="button"
            (click)="handleDelete(item.id)"
            class="btn-delete"
            title="Delete item"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .crud-card {
      background-color: var(--card-bg, #ffffff);
      border: 1px solid var(--border-color, #e2e8f0);
      border-radius: 0.75rem;
      padding: 2rem;
      width: 100%;
      max-width: 28rem;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .crud-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid var(--border-color, #e2e8f0);
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .status-dot {
      width: 0.625rem;
      height: 0.625rem;
      border-radius: 9999px;
      background-color: #10b981;
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    .card-title {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text-primary, #1e293b);
    }
    .api-badge {
      font-size: 0.75rem;
      font-family: monospace;
      color: var(--text-secondary, #64748b);
      max-width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .error-banner {
      padding: 0.75rem;
      font-size: 0.75rem;
      border-radius: 0.5rem;
      background-color: #fff1f2;
      color: #e11d48;
      border: 1px solid #fecdd3;
    }
    .form-row {
      display: flex;
      gap: 0.5rem;
    }
    .input-text {
      flex: 1;
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
      background-color: var(--bg-secondary, #f8fafc);
      border: 1px solid var(--border-color, #cbd5e1);
      border-radius: 0.5rem;
      color: var(--text-primary, #0f172a);
    }
    .input-text:focus {
      outline: none;
      border-color: #0d9488;
    }
    .btn-submit {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      font-weight: 600;
      background-color: #0d9488;
      color: white;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
    }
    .btn-submit:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .items-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      max-height: 14rem;
      overflow-y: auto;
    }
    .empty-text {
      font-size: 0.75rem;
      text-align: center;
      color: var(--text-secondary, #94a3b8);
      padding: 1rem 0;
    }
    .item-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.625rem;
      border-radius: 0.5rem;
      background-color: var(--bg-secondary, #f8fafc);
      border: 1px solid var(--border-color, #f1f5f9);
    }
    .item-label {
      display: flex;
      align-items: center;
      gap: 0.625rem;
      cursor: pointer;
      flex: 1;
      min-width: 0;
    }
    .checkbox {
      width: 1rem;
      height: 1rem;
      accent-color: #0d9488;
    }
    .item-text {
      font-size: 0.875rem;
      color: var(--text-primary, #334155);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .completed-text {
      font-size: 0.875rem;
      text-decoration: line-through;
      color: var(--text-secondary, #94a3b8);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .btn-delete {
      background: none;
      border: none;
      color: #f43f5e;
      cursor: pointer;
      padding: 0.25rem;
      font-size: 0.75rem;
    }
  `]
})
export class ItemsCrudComponent implements OnInit {
  private readonly itemsService = inject(ItemsService);

  readonly items = signal<Item[]>([]);
  readonly title = signal('');
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);
  readonly apiBase = this.itemsService.apiBase;

  ngOnInit(): void {
    this.loadItems();
  }

  async loadItems(): Promise<void> {
    try {
      this.loading.set(true);
      this.error.set(null);
      const data = await this.itemsService.getItems();
      this.items.set(Array.isArray(data) ? data : []);
    } catch (err: any) {
      this.error.set(err.message || 'Failed to connect to backend');
    } finally {
      this.loading.set(false);
    }
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.title.set(input.value);
  }

  async handleAdd(event: Event): Promise<void> {
    event.preventDefault();
    const val = this.title().trim();
    if (!val) return;
    try {
      const newItem = await this.itemsService.createItem(val);
      this.items.update((list) => [...list, newItem]);
      this.title.set('');
    } catch (err: any) {
      this.error.set(err.message);
    }
  }

  async handleToggle(item: Item): Promise<void> {
    try {
      const updated = await this.itemsService.updateItem(item.id, { completed: !item.completed });
      this.items.update((list) =>
        list.map((i) => (i.id === item.id ? { ...i, completed: updated.completed ?? !item.completed } : i))
      );
    } catch (err: any) {
      this.error.set(err.message);
    }
  }

  async handleDelete(id: string): Promise<void> {
    try {
      await this.itemsService.deleteItem(id);
      this.items.update((list) => list.filter((i) => i.id !== id));
    } catch (err: any) {
      this.error.set(err.message);
    }
  }
}
<% } %>
