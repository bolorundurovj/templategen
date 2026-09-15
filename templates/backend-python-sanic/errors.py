from sanic import json
from sanic.exceptions import NotFound
from logger import logger


def setup_error_handlers(app):
    """Register centralized error handlers."""

    @app.exception(NotFound)
    async def not_found_handler(request, exception):
        logger.warning(f"404 Not Found: {request.path}")
        return json({"error": "Not found", "status_code": 404}, status=404)

    @app.exception(Exception)
    async def generic_exception_handler(request, exception):
        status_code = getattr(exception, "status_code", 500)
        logger.error(f"Error handling request: {request.path} - {str(exception)}")
        message = str(exception) if status_code < 500 else "Internal server error"
        return json({"error": message, "status_code": status_code}, status=status_code)
