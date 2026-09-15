import dotenv from 'dotenv';
dotenv.config();

import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
<% if (database) { %>import itemsRouter from './routes/items';
import * as db from './config/db';<% } %>
import { requestLogger } from './middleware/requestLogger';
import { errorHandler } from './middleware/errorHandler';
import { notFound } from './middleware/notFound';

const app: Application = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

<% if (database) { %>
// Connect to Database
if (process.env.NODE_ENV !== 'test') {
  db.connect();
}
<% } %>

// Routes
app.use('/api', routes);
<% if (database) { %>app.use('/api/items', itemsRouter);
<% } %>

// Base route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to <%= projectName %> API' });
});

// Error handling (must be after routes)
app.use(notFound);
app.use(errorHandler);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
}

export default app;
