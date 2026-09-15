<% if (!isFullstack) { %>_SKIP_FILE_<% } else { %>
export interface Item {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
}

export const API_BASE =
  (typeof process !== 'undefined' && process.env && process.env.NUXT_PUBLIC_API_URL) ||
  'http://localhost:<%= backendPort || 3000 %>';

export async function fetchItems(): Promise<Item[]> {
  const res = await fetch(`${API_BASE}/api/items`);
  if (!res.ok) throw new Error(`Failed to fetch items: ${res.statusText}`);
  return res.json();
}

export async function createItem(title: string, description = ''): Promise<Item> {
  const res = await fetch(`${API_BASE}/api/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description }),
  });
  if (!res.ok) throw new Error(`Failed to create item: ${res.statusText}`);
  return res.json();
}

export async function updateItem(id: string, updates: Partial<Item>): Promise<Item> {
  const res = await fetch(`${API_BASE}/api/items/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  if (!res.ok) throw new Error(`Failed to update item: ${res.statusText}`);
  return res.json();
}

export async function deleteItem(id: string): Promise<void> {
  const res = await fetch(`${API_BASE}/api/items/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error(`Failed to delete item: ${res.statusText}`);
}
<% } %>
