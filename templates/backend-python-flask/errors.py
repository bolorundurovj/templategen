from flask import jsonify, current_app, request


def register_error_handlers(app):
    """Register custom JSON error handlers."""

    @app.errorhandler(404)
    def not_found(error):
        app.logger.warning(f"404 Not Found: {request.method} {request.path}")
        return jsonify({"error": "Not found", "status_code": 404}), 404

    @app.errorhandler(500)
    def internal_error(error):
        app.logger.error(f"500 Internal Error: {request.method} {request.path} - {str(error)}")
        return jsonify({"error": "Internal server error", "status_code": 500}), 500
