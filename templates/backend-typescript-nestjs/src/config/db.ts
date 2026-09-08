<% if (database === 'mongodb') { %>import mongoose from 'mongoose';

export const connectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/<%= projectName %>');
    console.log('📦 NestJS connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};
<% } else if (database === 'postgresql') { %>import { Pool } from 'pg';

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://localhost:5432/<%= projectName %>'
});

export const connectDatabase = async (): Promise<void> => {
  try {
    await pool.query('SELECT NOW()');
    console.log('📦 NestJS connected to PostgreSQL');
  } catch (error) {
    console.error('PostgreSQL connection error:', error);
  }
};
<% } else if (database === 'mysql') { %>import mysql from 'mysql2/promise';

export const connectDatabase = async (): Promise<void> => {
  try {
    await mysql.createConnection(process.env.DATABASE_URL || 'mysql://root:password@localhost/<%= projectName %>');
    console.log('📦 NestJS connected to MySQL');
  } catch (error) {
    console.error('MySQL connection error:', error);
  }
};
<% } else if (database === 'sqlite') { %>import sqlite3 from 'sqlite3';
import path from 'path';

export const connectDatabase = (): void => {
  const dbPath = path.resolve(__dirname, '../../database.sqlite');
  new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error('SQLite connection error:', err);
    } else {
      console.log('📦 NestJS connected to SQLite');
    }
  });
};
<% } else { %>export const connectDatabase = (): void => {
  console.log('No database configuration required.');
};
<% } %>
