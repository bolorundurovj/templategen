import { Router, Request, Response } from 'express';
<% if (database === 'mongodb') { %>import mongoose from 'mongoose';
import { Item } from '../models/item';
<% } %>
import * as ItemStore from '../models/item';

const router = Router();

<% if (database === 'mongodb') { %>
router.get('/', async (req: Request, res: Response) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const items = await Item.find().sort({ createdAt: -1 });
      return res.json(items);
    }
  } catch (err) {}
  res.json(ItemStore.getAll());
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const item = await Item.findById(req.params.id);
      if (!item) {
        res.status(404).json({ error: { message: 'Item not found', statusCode: 404 } });
        return;
      }
      return res.json(item);
    }
  } catch (err) {}
  const item = ItemStore.getById(req.params.id);
  if (!item) {
    res.status(404).json({ error: { message: 'Item not found', statusCode: 404 } });
    return;
  }
  res.json(item);
});

router.post('/', async (req: Request, res: Response) => {
  if (!req.body.title) {
    res.status(400).json({ error: { message: 'Title is required', statusCode: 400 } });
    return;
  }
  try {
    if (mongoose.connection.readyState === 1) {
      const item = await Item.create({
        title: req.body.title,
        description: req.body.description || '',
      });
      return res.status(201).json(item);
    }
  } catch (err) {}
  const item = ItemStore.create({
    title: req.body.title,
    description: req.body.description,
  });
  res.status(201).json(item);
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!item) {
        res.status(404).json({ error: { message: 'Item not found', statusCode: 404 } });
        return;
      }
      return res.json(item);
    }
  } catch (err) {}
  const item = ItemStore.update(req.params.id, req.body);
  if (!item) {
    res.status(404).json({ error: { message: 'Item not found', statusCode: 404 } });
    return;
  }
  res.json(item);
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const item = await Item.findByIdAndDelete(req.params.id);
      if (!item) {
        res.status(404).json({ error: { message: 'Item not found', statusCode: 404 } });
        return;
      }
      return res.status(204).send();
    }
  } catch (err) {}
  const removed = ItemStore.remove(req.params.id);
  if (!removed) {
    res.status(404).json({ error: { message: 'Item not found', statusCode: 404 } });
    return;
  }
  res.status(204).send();
});
<% } else { %>
router.get('/', (req: Request, res: Response) => {
  res.json(ItemStore.getAll());
});

router.get('/:id', (req: Request, res: Response) => {
  const item = ItemStore.getById(req.params.id);
  if (!item) {
    res.status(404).json({ error: { message: 'Item not found', statusCode: 404 } });
    return;
  }
  res.json(item);
});

router.post('/', (req: Request, res: Response) => {
  if (!req.body.title) {
    res.status(400).json({ error: { message: 'Title is required', statusCode: 400 } });
    return;
  }
  const item = ItemStore.create({
    title: req.body.title,
    description: req.body.description,
  });
  res.status(201).json(item);
});

router.put('/:id', (req: Request, res: Response) => {
  const item = ItemStore.update(req.params.id, req.body);
  if (!item) {
    res.status(404).json({ error: { message: 'Item not found', statusCode: 404 } });
    return;
  }
  res.json(item);
});

router.delete('/:id', (req: Request, res: Response) => {
  const removed = ItemStore.remove(req.params.id);
  if (!removed) {
    res.status(404).json({ error: { message: 'Item not found', statusCode: 404 } });
    return;
  }
  res.status(204).send();
});
<% } %>

export default router;
