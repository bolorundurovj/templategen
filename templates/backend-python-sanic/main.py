from sanic import Sanic, json
from datetime import datetime
from middleware import setup_middleware
from errors import setup_error_handlers
from routes.items import items_bp
from logger import logger

app = Sanic("<%= projectName %>")

# Setup middleware & centralized error handlers
setup_middleware(app)
setup_error_handlers(app)

# Register items blueprint
app.blueprint(items_bp)


@app.get("/")
async def root(request):
    return json({"message": "Welcome to <%= projectName %> API"})


@app.get("/api/health")
async def health(request):
    return json({
        "status": "ok",
        "timestamp": datetime.utcnow().isoformat()
    })


@app.get("/api/info")
async def info(request):
    return json({
        "name": "<%= projectName %>",
        "version": "0.1.0",
        "environment": "development"
    })


if __name__ == "__main__":
    logger.info("Starting Sanic server on port 8000...")
    app.run(host="0.0.0.0", port=8000)
