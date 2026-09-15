<% if (!isFullstack) { %>_SKIP_FILE_<% } else { %>
import { Injectable } from '@angular/core';

export interface Item {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  readonly apiBase =
    (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process?.env?.API_URL) ||
    'http://localhost:<%= backendPort || 3000 %>';

  async getItems(): Promise<Item[]> {
    const res = await fetch(`${this.apiBase}/api/items`);
    if (!res.ok) throw new Error(`Failed to fetch items: ${res.statusText}`);
    return res.json();
  }

  async createItem(title: string, description = ''): Promise<Item> {
    const res = await fetch(`${this.apiBase}/api/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description }),
    });
    if (!res.ok) throw new Error(`Failed to create item: ${res.statusText}`);
    return res.json();
  }

  async updateItem(id: string, updates: Partial<Item>): Promise<Item> {
    const res = await fetch(`${this.apiBase}/api/items/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    if (!res.ok) throw new Error(`Failed to update item: ${res.statusText}`);
    return res.json();
  }

  async deleteItem(id: string): Promise<void> {
    const res = await fetch(`${this.apiBase}/api/items/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error(`Failed to delete item: ${res.statusText}`);
  }
}
<% } %>
