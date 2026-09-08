import os
<% if (database === 'mongodb') { %>from motor.motor_asyncio import AsyncIOMotorClient

mongo_client = None
db = None

async def connect_db():
    global mongo_client, db
    uri = os.getenv("MONGO_URI", "mongodb://localhost:27017/<%= projectName %>")
    mongo_client = AsyncIOMotorClient(uri)
    db = mongo_client["<%= projectName %>"]
    print("📦 Connected to MongoDB")
<% } else if (database === 'postgresql') { %>import psycopg2

def connect_db():
    try:
        conn = psycopg2.connect(os.getenv("DATABASE_URL", "dbname=<%= projectName %> user=postgres password=postgres host=localhost"))
        conn.close()
        print("📦 Connected to PostgreSQL")
    except Exception as e:
        print(f"PostgreSQL connection warning: {e}")
<% } else if (database === 'mysql') { %>import pymysql

def connect_db():
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

def connect_db():
    conn = sqlite3.connect("database.sqlite")
    conn.close()
    print("📦 Connected to SQLite")
<% } else { %>def connect_db():
    print("No database configuration required.")
<% } %>
