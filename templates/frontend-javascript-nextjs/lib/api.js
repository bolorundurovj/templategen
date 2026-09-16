<% if (!isFullstack) { %>_SKIP_FILE_<% } else { %>
const API_BASE =
  (typeof process !== 'undefined' && process.env && process.env.NEXT_PUBLIC_API_URL) ||
  'http://localhost:<%= backendPort || 3000 %>';

function normalizeItem(item) {
  return {
    ...item,
    id: String(item?.id || item?._id || ''),
  };
}

export async function fetchItems() {
  const res = await fetch(`${API_BASE}/api/items`);
  if (!res.ok) throw new Error(`Failed to fetch items: ${res.statusText}`);
  const data = await res.json();
  return (Array.isArray(data) ? data : []).map(normalizeItem);
}

export async function createItem(title, description = '') {
  const res = await fetch(`${API_BASE}/api/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description }),
  });
  if (!res.ok) throw new Error(`Failed to create item: ${res.statusText}`);
  const data = await res.json();
  return normalizeItem(data);
}

export async function updateItem(id, updates) {
  const res = await fetch(`${API_BASE}/api/items/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  if (!res.ok) throw new Error(`Failed to update item: ${res.statusText}`);
  const data = await res.json();
  return normalizeItem(data);
}

export async function deleteItem(id) {
  const res = await fetch(`${API_BASE}/api/items/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error(`Failed to delete item: ${res.statusText}`);
}

export { API_BASE };
<% } %>
