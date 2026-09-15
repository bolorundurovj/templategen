import time
from django.utils.deprecation import MiddlewareMixin


class TimingMiddleware(MiddlewareMixin):
    """Adds X-Process-Time header to every response."""

    def process_request(self, request):
        request._start_time = time.time()

    def process_response(self, request, response):
        if hasattr(request, '_start_time'):
            duration = time.time() - request._start_time
            response['X-Process-Time'] = f"{duration:.4f}"
        return response
