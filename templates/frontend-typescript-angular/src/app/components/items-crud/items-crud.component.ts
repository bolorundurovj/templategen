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

      @if (error()) {
        <div class="error-banner">
          {{ error() }}
        </div>
      }

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
        @if (loading()) {
          <p class="empty-text">Loading items...</p>
        } @else if (items().length === 0) {
          <p class="empty-text">No items yet. Add one above!</p>
        } @else {
          @for (item of items(); track (item.id || item._id || $index)) {
            <div class="item-row">
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
                (click)="handleDelete(item.id || item._id)"
                class="btn-delete"
                title="Delete item"
              >
                ✕
              </button>
            </div>
          }
        }
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
    .crud-card {
      background-color: var(--card-bg, #ffffff);
      border: 1px solid var(--border-color, #e2e8f0);
      border-radius: 0.75rem;
      padding: 2rem;
      width: 100%;
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
    [data-theme="dark"] .error-banner,
    .dark .error-banner {
      background-color: rgba(225, 29, 72, 0.15);
      border-color: rgba(225, 29, 72, 0.3);
      color: #fb7185;
    }
    .form-row {
      display: flex;
      gap: 0.5rem;
    }
    .input-text {
      flex: 1;
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
      background-color: var(--bg-color, #f8fafc);
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
      max-height: 20rem;
      overflow-y: auto;
      width: 100%;
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
      padding: 0.75rem;
      border-radius: 0.5rem;
      background-color: var(--bg-color, #f8fafc);
      border: 1px solid var(--border-color, #f1f5f9);
      transition: background-color 0.15s;
    }
    .item-label {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
      flex: 1;
      min-width: 0;
    }
    .checkbox {
      width: 1.125rem;
      height: 1.125rem;
      accent-color: #0d9488;
      cursor: pointer;
      flex-shrink: 0;
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
      padding: 0.35rem 0.5rem;
      font-size: 0.875rem;
      border-radius: 0.375rem;
      line-height: 1;
      transition: background-color 0.15s;
      flex-shrink: 0;
    }
    .btn-delete:hover {
      background-color: rgba(244, 63, 94, 0.1);
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
    const id = item.id || (item as any)._id;
    if (!id) return;
    try {
      const updated = await this.itemsService.updateItem(id, { completed: !item.completed });
      this.items.update((list) =>
        list.map((i) => ((i.id || (i as any)._id) === id ? { ...i, completed: updated.completed ?? !item.completed } : i))
      );
    } catch (err: any) {
      this.error.set(err.message);
    }
  }

  async handleDelete(id?: string): Promise<void> {
    if (!id) return;
    try {
      await this.itemsService.deleteItem(id);
      this.items.update((list) => list.filter((i) => (i.id || (i as any)._id) !== id));
    } catch (err: any) {
      this.error.set(err.message);
    }
  }
}
<% } %>
