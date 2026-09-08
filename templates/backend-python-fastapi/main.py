from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
<% if (database) { %>from app.database import connect_db<% } %>

app = FastAPI(title="<%= projectName %> API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

<% if (database) { %>
@app.on_event("startup")
async def startup_event():
    <% if (database === 'mongodb') { %>
    await connect_db()
    <% } else { %>
    connect_db()
    <% } %>
<% } %>

@app.get("/")
def read_root():
    return {"message": "Welcome to <%= projectName %> API"}

@app.get("/api/health")
def health_check():
    return {
        "status": "ok",
        "timestamp": datetime.utcnow().isoformat()
    }
