<% if (!isFullstack) { %>_SKIP_FILE_<% } else { %>
import { fetchItems, createItem, updateItem, deleteItem, API_BASE } from './api';

export function setupItemsCrud(element) {
  let items = [];
  let loading = true;
  let error = null;

  function render() {
    element.innerHTML = `
      <div class="crud-container" style="
        background: var(--card-bg, #ffffff);
        border: 1px solid var(--border-color, #e2e8f0);
        border-radius: 0.75rem;
        padding: 1.5rem;
        margin-top: 1.5rem;
        width: 100%;
        max-width: 28rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        text-align: left;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
      ">
        <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-color, #e2e8f0); padding-bottom: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="width: 8px; height: 8px; border-radius: 50%; background: #10b981; display: inline-block;"></span>
            <strong style="color: var(--text-primary); font-size: 1rem;">Fullstack CRUD API</strong>
          </div>
          <span style="font-size: 0.75rem; font-family: monospace; color: var(--text-secondary); max-width: 140px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${API_BASE}</span>
        </div>

        ${error ? `<div style="padding: 0.5rem; font-size: 0.75rem; background: rgba(225, 29, 72, 0.1); color: #f43f5e; border-radius: 0.375rem; border: 1px solid rgba(225, 29, 72, 0.3);">${error}</div>` : ''}

        <form id="crud-form" style="display: flex; gap: 0.5rem;">
          <input
            id="item-input"
            type="text"
            placeholder="New item title..."
            style="flex: 1; padding: 0.5rem 0.75rem; font-size: 0.875rem; border: 1px solid var(--border-color, #cbd5e1); border-radius: 0.5rem; background: var(--bg-color, #f8fafc); color: var(--text-primary);"
          />
          <button
            type="submit"
            style="padding: 0.5rem 1rem; font-size: 0.875rem; font-weight: 600; background: #0d9488; color: white; border: none; border-radius: 0.5rem; cursor: pointer;"
          >
            Add
          </button>
        </form>

        <div id="items-list" style="display: flex; flex-direction: column; gap: 0.5rem; max-height: 20rem; overflow-y: auto;">
          ${loading
            ? `<p style="font-size: 0.75rem; text-align: center; color: var(--text-secondary); padding: 0.75rem 0;">Loading items...</p>`
            : items.length === 0
            ? `<p style="font-size: 0.75rem; text-align: center; color: var(--text-secondary); padding: 0.75rem 0;">No items yet. Add one above!</p>`
            : items.map((item) => `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; border-radius: 0.5rem; background: var(--bg-color, #f8fafc); border: 1px solid var(--border-color, #f1f5f9);">
                <label style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer; flex: 1; min-width: 0;">
                  <input type="checkbox" data-id="${item.id || item._id}" ${item.completed ? 'checked' : ''} class="item-checkbox" style="width: 1.125rem; height: 1.125rem; accent-color: #0d9488; cursor: pointer; flex-shrink: 0;" />
                  <span style="font-size: 0.875rem; ${item.completed ? 'text-decoration: line-through; color: var(--text-secondary);' : 'color: var(--text-primary);'} overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${item.title}
                  </span>
                </label>
                <button type="button" data-id="${item.id || item._id}" class="btn-delete-item" style="background: none; border: none; color: #f43f5e; cursor: pointer; padding: 0.35rem 0.5rem; font-size: 0.875rem; line-height: 1; flex-shrink: 0;">✕</button>
              </div>
            `).join('')
          }
        </div>
      </div>
    `;

    bindEvents();
  }

  function bindEvents() {
    const form = element.querySelector('#crud-form');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const input = element.querySelector('#item-input');
        if (!input || !input.value.trim()) return;
        try {
          const newItem = await createItem(input.value.trim());
          items.push(newItem);
          input.value = '';
          render();
        } catch (err) {
          error = err.message;
          render();
        }
      });
    }

    element.querySelectorAll('.item-checkbox').forEach((checkbox) => {
      checkbox.addEventListener('change', async () => {
        const id = checkbox.dataset.id;
        if (!id) return;
        const item = items.find((i) => (i.id || i._id) === id);
        if (!item) return;
        try {
          const updated = await updateItem(id, { completed: !item.completed });
          item.completed = updated.completed ?? !item.completed;
          render();
        } catch (err) {
          error = err.message;
          render();
        }
      });
    });

    element.querySelectorAll('.btn-delete-item').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = btn.dataset.id;
        if (!id) return;
        try {
          await deleteItem(id);
          items = items.filter((i) => (i.id || i._id) !== id);
          render();
        } catch (err) {
          error = err.message;
          render();
        }
      });
    });
  }

  async function init() {
    try {
      loading = true;
      error = null;
      render();
      const data = await fetchItems();
      items = Array.isArray(data) ? data : [];
    } catch (err) {
      error = err.message || 'Failed to connect to backend';
    } finally {
      loading = false;
      render();
    }
  }

  init();
}
<% } %>
