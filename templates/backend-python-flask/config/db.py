import os
<% if (database === 'mongodb') { %>from pymongo import MongoClient

db = None

def init_db():
    global db
    uri = os.getenv("MONGO_URI", "mongodb://localhost:27017/<%= projectName %>")
    client = MongoClient(uri)
    db = client["<%= projectName %>"]
    print("📦 Connected to MongoDB")
<% } else if (database === 'postgresql') { %>import psycopg2

def init_db():
    try:
        conn = psycopg2.connect(os.getenv("DATABASE_URL", "dbname=<%= projectName %> user=postgres password=postgres host=localhost"))
        conn.close()
        print("📦 Connected to PostgreSQL")
    except Exception as e:
        print(f"PostgreSQL connection warning: {e}")
<% } else if (database === 'mysql') { %>import pymysql

def init_db():
    try:
        conn = pymysql.connect(
            host=os.getenv("DB_HOST", "localhost"),
            user=os.getenv("DB_USER", "root"),
            password=os.getenv("DB_PASSWORD", "password"),
            database=os.getenv("DB_NAME", "<%= projectName %>")
        )
        conn.close()
        print("📦 Connected to MySQL")
    except Exception as e:
        print(f"MySQL connection warning: {e}")
<% } else if (database === 'sqlite') { %>import sqlite3

def init_db():
    conn = sqlite3.connect("database.sqlite")
    conn.close()
    print("📦 Connected to SQLite")
<% } else { %>def init_db():
    print("No database configuration required.")
<% } %>
