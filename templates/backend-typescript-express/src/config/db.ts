<% if (database === 'mongodb') { %>import mongoose from 'mongoose';

export const connect = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/<%= projectName %>');
    console.log('📦 Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
<% } else if (database === 'postgresql') { %>import { Pool } from 'pg';

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://localhost:5432/<%= projectName %>'
});

export const connect = async (): Promise<void> => {
  try {
    await pool.query('SELECT NOW()');
    console.log('📦 Connected to PostgreSQL');
  } catch (error) {
    console.error('PostgreSQL connection error:', error);
    process.exit(1);
  }
};
<% } else if (database === 'mysql') { %>import mysql from 'mysql2/promise';

export let connection: mysql.Connection;

export const connect = async (): Promise<void> => {
  try {
    connection = await mysql.createConnection(process.env.DATABASE_URL || 'mysql://root:password@localhost/<%= projectName %>');
    console.log('📦 Connected to MySQL');
  } catch (error) {
    console.error('MySQL connection error:', error);
    process.exit(1);
  }
};
<% } else if (database === 'sqlite') { %>import sqlite3 from 'sqlite3';
import path from 'path';

export let db: sqlite3.Database;

export const connect = (): void => {
  const dbPath = path.resolve(__dirname, '../../database.sqlite');
  db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error('SQLite connection error:', err);
      process.exit(1);
    }
    console.log('📦 Connected to SQLite');
  });
};
<% } else { %>// No database selected
export const connect = (): void => {
  console.log('No database configuration required.');
};
<% } %>
