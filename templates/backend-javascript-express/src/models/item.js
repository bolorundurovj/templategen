<% if (database === 'mongodb') { %>const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: '' },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const Item = mongoose.model('Item', ItemSchema);
<% } %>
let items = [];
let nextId = 1;

const getAll = () => items;

const getById = (id) => items.find((item) => item.id === id);

const create = (data) => {
  const now = new Date().toISOString();
  const item = {
    id: String(nextId++),
    title: data.title,
    description: data.description || '',
    completed: false,
    createdAt: now,
    updatedAt: now,
  };
  items.push(item);
  return item;
};

const update = (id, data) => {
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) return null;
  items[index] = {
    ...items[index],
    ...data,
    updatedAt: new Date().toISOString(),
  };
  return items[index];
};

const remove = (id) => {
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) return false;
  items.splice(index, 1);
  return true;
};

const reset = () => {
  items = [];
  nextId = 1;
};

module.exports = {
  <% if (database === 'mongodb') { %>Item,<% } %>
  getAll,
  getById,
  create,
  update,
  remove,
  reset,
};
