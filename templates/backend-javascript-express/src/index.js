require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
<% if (database) { %>const itemsRouter = require('./routes/items');
const db = require('./config/db');<% } %>
const { requestLogger } = require('./middleware/requestLogger');
const { errorHandler } = require('./middleware/errorHandler');
const { notFound } = require('./middleware/notFound');

const app = express();
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
app.get('/', (req, res) => {
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

module.exports = app;

