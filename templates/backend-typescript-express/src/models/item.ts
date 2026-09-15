<% if (database === 'mongodb') { %>import mongoose, { Schema, Document } from 'mongoose';

export interface IItem extends Document {
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ItemSchema = new Schema<IItem>(
  {
    title: { type: String, required: true },
    description: { type: String, default: '' },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const Item = mongoose.model<IItem>('Item', ItemSchema);
<% } else { %>export interface Item {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

let items: Item[] = [];
let nextId = 1;

export const getAll = (): Item[] => items;

export const getById = (id: string): Item | undefined =>
  items.find((item) => item.id === id);

export const create = (data: { title: string; description?: string }): Item => {
  const now = new Date().toISOString();
  const item: Item = {
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

export const update = (
  id: string,
  data: Partial<Pick<Item, 'title' | 'description' | 'completed'>>,
): Item | null => {
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) return null;
  items[index] = {
    ...items[index],
    ...data,
    updatedAt: new Date().toISOString(),
  };
  return items[index];
};

export const remove = (id: string): boolean => {
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) return false;
  items.splice(index, 1);
  return true;
};

export const reset = (): void => {
  items = [];
  nextId = 1;
};
<% } %>
