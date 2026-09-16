<% if (!isFullstack) { %>_SKIP_FILE_<% } else { %>
export interface Item {
  id: string;
  _id?: string;
  title: string;
  description?: string;
  completed: boolean;
}

const API_BASE =
  (typeof process !== 'undefined' && process.env && process.env.NEXT_PUBLIC_API_URL) ||
  'http://localhost:<%= backendPort || 3000 %>';

function normalizeItem(item: any): Item {
  return {
    ...item,
    id: String(item?.id || item?._id || ''),
  };
}

export async function fetchItems(): Promise<Item[]> {
  const res = await fetch(`${API_BASE}/api/items`);
  if (!res.ok) throw new Error(`Failed to fetch items: ${res.statusText}`);
  const data = await res.json();
  return (Array.isArray(data) ? data : []).map(normalizeItem);
}

export async function createItem(title: string, description = ''): Promise<Item> {
  const res = await fetch(`${API_BASE}/api/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description }),
  });
  if (!res.ok) throw new Error(`Failed to create item: ${res.statusText}`);
  const data = await res.json();
  return normalizeItem(data);
}

export async function updateItem(id: string, updates: Partial<Item>): Promise<Item> {
  const res = await fetch(`${API_BASE}/api/items/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  if (!res.ok) throw new Error(`Failed to update item: ${res.statusText}`);
  const data = await res.json();
  return normalizeItem(data);
}

export async function deleteItem(id: string): Promise<void> {
  const res = await fetch(`${API_BASE}/api/items/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error(`Failed to delete item: ${res.statusText}`);
}

export { API_BASE };
<% } %>
