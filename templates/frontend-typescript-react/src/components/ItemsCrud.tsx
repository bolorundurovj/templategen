<% if (!isFullstack) { %>_SKIP_FILE_<% } else { %>
import { useEffect, useState } from 'react'
import { fetchItems, createItem, updateItem, deleteItem, API_BASE, type Item } from '../services/api'

export function ItemsCrud() {
  const [items, setItems] = useState<Item[]>([])
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadItems = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchItems()
      setItems(Array.isArray(data) ? data : [])
    } catch (err: any) {
      setError(err.message || 'Failed to connect to backend')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadItems()
  }, [])

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    try {
      const newItem = await createItem(title.trim())
      setItems((prev) => [...prev, newItem])
      setTitle('')
    } catch (err: any) {
      setError(err.message)
    }
  }

  const handleToggle = async (item: Item) => {
    const id = item.id || (item as any)._id
    if (!id) return
    try {
      const updated = await updateItem(id, { completed: !item.completed })
      setItems((prev) =>
        prev.map((i) => ((i.id || (i as any)._id) === id ? { ...i, completed: updated.completed ?? !item.completed } : i))
      )
    } catch (err: any) {
      setError(err.message)
    }
  }

  const handleDelete = async (id?: string) => {
    if (!id) return
    try {
      await deleteItem(id)
      setItems((prev) => prev.filter((i) => (i.id || (i as any)._id) !== id))
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className="relative p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm flex flex-col space-y-4 w-full max-w-md">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">Fullstack CRUD API</h3>
        </div>
        <span className="text-xs font-mono text-slate-400 dark:text-slate-500 truncate max-w-[150px]">{API_BASE}</span>
      </div>

      {error && (
        <div className="p-3 text-xs rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900">
          {error}
        </div>
      )}

      <form onSubmit={handleAdd} className="flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New item title..."
          className="flex-1 px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button
          type="submit"
          disabled={!title.trim()}
          className="px-4 py-2 text-sm font-semibold bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white rounded-lg transition-colors shadow-sm"
        >
          Add
        </button>
      </form>

      <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
        {loading ? (
          <p className="text-xs text-center text-slate-400 py-4">Loading items...</p>
        ) : items.length === 0 ? (
          <p className="text-xs text-center text-slate-400 py-4">No items yet. Add one above!</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id || (item as any)._id}
              className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 group"
            >
              <label className="flex items-center space-x-2.5 cursor-pointer flex-1 min-w-0">
                <input
                  type="checkbox"
                  checked={Boolean(item.completed)}
                  onChange={() => handleToggle(item)}
                  className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4"
                />
                <span className={`text-sm truncate ${item.completed ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-700 dark:text-slate-200'}`}>
                  {item.title}
                </span>
              </label>
              <button
                type="button"
                onClick={() => handleDelete(item.id || (item as any)._id)}
                className="opacity-60 hover:opacity-100 text-rose-500 p-1 text-xs transition-opacity"
                title="Delete item"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
<% } %>
