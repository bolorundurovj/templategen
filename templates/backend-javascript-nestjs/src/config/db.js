<% if (database === 'mongodb') { %>const mongoose = require('mongoose');

exports.connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/<%= projectName %>');
    console.log('📦 NestJS connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};
<% } else if (database === 'postgresql') { %>const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://localhost:5432/<%= projectName %>'
});

exports.connectDatabase = async () => {
  try {
    await pool.query('SELECT NOW()');
    console.log('📦 NestJS connected to PostgreSQL');
  } catch (error) {
    console.error('PostgreSQL connection error:', error);
  }
};
exports.pool = pool;
<% } else if (database === 'mysql') { %>const mysql = require('mysql2/promise');

exports.connectDatabase = async () => {
  try {
    const connection = await mysql.createConnection(process.env.DATABASE_URL || 'mysql://root:password@localhost/<%= projectName %>');
    console.log('📦 NestJS connected to MySQL');
    exports.connection = connection;
  } catch (error) {
    console.error('MySQL connection error:', error);
  }
};
<% } else if (database === 'sqlite') { %>const sqlite3 = require('sqlite3').verbose();
const path = require('path');

exports.connectDatabase = () => {
  const dbPath = path.resolve(__dirname, '../../database.sqlite');
  const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error('SQLite connection error:', err);
    } else {
      console.log('📦 NestJS connected to SQLite');
    }
  });
  exports.db = db;
};
<% } else { %>exports.connectDatabase = () => {
  console.log('No database configuration required.');
};
<% } %>
