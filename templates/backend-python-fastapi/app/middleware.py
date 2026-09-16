import time
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import Response
from app.logger import logger


class TimingMiddleware(BaseHTTPMiddleware):
    """Adds X-Process-Time header and logs requests."""

    async def dispatch(self, request: Request, call_next) -> Response:
        start = time.time()
        try:
            response = await call_next(request)
        except Exception as exc:
            logger.error(f"Error during request processing: {exc}")
            raise
        duration = time.time() - start
        response.headers["X-Process-Time"] = f"{duration:.4f}"
        logger.info(
            f"{request.method} {request.url.path} {response.status_code} - {duration * 1000:.2f}ms"
        )
        return response
