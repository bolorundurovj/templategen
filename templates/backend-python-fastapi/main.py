from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException
from datetime import datetime, timezone
<% if (database) { %>from app.database import connect_db<% } %>
from app.config import settings
from app.middleware import TimingMiddleware
from app.exceptions import http_exception_handler, validation_exception_handler, generic_exception_handler
from app.routers import items as items_router

app = FastAPI(title=settings.APP_NAME, version=settings.VERSION)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_middleware(TimingMiddleware)

app.add_exception_handler(StarletteHTTPException, http_exception_handler)
app.add_exception_handler(RequestValidationError, validation_exception_handler)
app.add_exception_handler(Exception, generic_exception_handler)

<% if (database) { %>
@app.on_event("startup")
async def startup_event():
    try:
        <% if (database === 'mongodb') { %>
        await connect_db()
        <% } else { %>
        connect_db()
        <% } %>
    except Exception as e:
        print(f"Database connection warning: {e}")
<% } %>

app.include_router(items_router.router)

@app.get("/")
def read_root():
    return {"message": f"Welcome to {settings.APP_NAME} API"}

@app.get("/api/health")
def health_check():
    return {
        "status": "ok",
        "timestamp": datetime.now(timezone.utc).isoformat()
    }

@app.get("/api/info")
def app_info():
    return {
        "name": settings.APP_NAME,
        "version": settings.VERSION,
        "debug": settings.DEBUG,
    }
