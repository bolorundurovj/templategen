const express = require('express');
const router = express.Router();
<% if (database === 'mongodb') { %>const mongoose = require('mongoose');
const { Item } = require('../models/item');
<% } %>
const ItemStore = require('../models/item');

<% if (database === 'mongodb') { %>
router.get('/', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const items = await Item.find().sort({ createdAt: -1 });
      return res.json(items);
    }
  } catch (err) {}
  res.json(ItemStore.getAll());
});

router.get('/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const item = await Item.findById(req.params.id);
      if (!item) return res.status(404).json({ error: { message: 'Item not found', statusCode: 404 } });
      return res.json(item);
    }
  } catch (err) {}
  const item = ItemStore.getById(req.params.id);
  if (!item) return res.status(404).json({ error: { message: 'Item not found', statusCode: 404 } });
  res.json(item);
});

router.post('/', async (req, res) => {
  if (!req.body.title) return res.status(400).json({ error: { message: 'Title is required', statusCode: 400 } });
  try {
    if (mongoose.connection.readyState === 1) {
      const item = await Item.create({ title: req.body.title, description: req.body.description || '' });
      return res.status(201).json(item);
    }
  } catch (err) {}
  const item = ItemStore.create({ title: req.body.title, description: req.body.description || '' });
  res.status(201).json(item);
});

router.put('/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!item) return res.status(404).json({ error: { message: 'Item not found', statusCode: 404 } });
      return res.json(item);
    }
  } catch (err) {}
  const item = ItemStore.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: { message: 'Item not found', statusCode: 404 } });
  res.json(item);
});

router.delete('/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const item = await Item.findByIdAndDelete(req.params.id);
      if (!item) return res.status(404).json({ error: { message: 'Item not found', statusCode: 404 } });
      return res.status(204).send();
    }
  } catch (err) {}
  const removed = ItemStore.remove(req.params.id);
  if (!removed) return res.status(404).json({ error: { message: 'Item not found', statusCode: 404 } });
  res.status(204).send();
});
<% } else { %>
router.get('/', (req, res) => {
  res.json(ItemStore.getAll());
});

router.get('/:id', (req, res) => {
  const item = ItemStore.getById(req.params.id);
  if (!item) return res.status(404).json({ error: { message: 'Item not found', statusCode: 404 } });
  res.json(item);
});

router.post('/', (req, res) => {
  if (!req.body.title) return res.status(400).json({ error: { message: 'Title is required', statusCode: 400 } });
  const item = ItemStore.create({ title: req.body.title, description: req.body.description });
  res.status(201).json(item);
});

router.put('/:id', (req, res) => {
  const item = ItemStore.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: { message: 'Item not found', statusCode: 404 } });
  res.json(item);
});

router.delete('/:id', (req, res) => {
  const removed = ItemStore.remove(req.params.id);
  if (!removed) return res.status(404).json({ error: { message: 'Item not found', statusCode: 404 } });
  res.status(204).send();
});
<% } %>

module.exports = router;
