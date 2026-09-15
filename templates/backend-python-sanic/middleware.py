import time
from logger import logger


def setup_middleware(app):
    """Setup timing and request logging middleware."""

    @app.middleware('request')
    async def track_time_start(request):
        request.ctx.start_time = time.time()

    @app.middleware('response')
    async def track_time_finish(request, response):
        if hasattr(request.ctx, 'start_time'):
            duration = time.time() - request.ctx.start_time
            response.headers['X-Process-Time'] = f"{duration:.4f}"
            logger.info(
                f"{request.method} {request.path} {response.status} - {duration * 1000:.2f}ms"
            )
