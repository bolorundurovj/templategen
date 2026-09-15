from fastapi import FastAPI
from fastapi.exceptions import HTTPException
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
<% if (database) { %>from app.database import connect_db<% } %>
from app.config import settings
from app.middleware import TimingMiddleware
from app.exceptions import http_exception_handler, generic_exception_handler
<% if (database) { %>from app.routers import items as items_router<% } %>

app = FastAPI(title=settings.APP_NAME, version=settings.VERSION)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_middleware(TimingMiddleware)

app.add_exception_handler(HTTPException, http_exception_handler)
app.add_exception_handler(Exception, generic_exception_handler)

<% if (database) { %>
@app.on_event("startup")
async def startup_event():
    <% if (database === 'mongodb') { %>
    await connect_db()
    <% } else { %>
    connect_db()
    <% } %>

app.include_router(items_router.router)
<% } %>

@app.get("/")
def read_root():
    return {"message": f"Welcome to {settings.APP_NAME} API"}

@app.get("/api/health")
def health_check():
    return {
        "status": "ok",
        "timestamp": datetime.utcnow().isoformat()
    }

@app.get("/api/info")
def app_info():
    return {
        "name": settings.APP_NAME,
        "version": settings.VERSION,
        "debug": settings.DEBUG,
    }
