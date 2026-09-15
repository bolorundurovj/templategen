import time
import tornado.web
from logger import logger


class BaseHandler(tornado.web.RequestHandler):
    """Base handler with request timing, centralized logging, and JSON error handling."""

    def prepare(self):
        self._start_time = time.time()

    def set_default_headers(self):
        self.set_header("Content-Type", "application/json")

    def on_finish(self):
        if hasattr(self, '_start_time'):
            duration = time.time() - self._start_time
            logger.info(
                f"{self.request.method} {self.request.path} {self.get_status()} - {duration * 1000:.2f}ms"
            )

    def write_error(self, status_code, **kwargs):
        self.set_header("Content-Type", "application/json")
        message = kwargs.get("message", self._reason)
        if status_code >= 500:
            logger.error(f"{status_code} Error: {self.request.path} - {message}")
        else:
            logger.warning(f"{status_code} Warning: {self.request.path} - {message}")

        self.finish({
            "error": message,
            "status_code": status_code,
        })
