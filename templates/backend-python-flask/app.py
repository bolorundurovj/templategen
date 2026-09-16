from flask import Flask, jsonify, request
from config.settings import get_config
from config.logging_config import setup_logging
<% if (database) { %>from config.db import init_db<% } %>
from routes.api import api_bp
from routes.items import items_bp
from errors import register_error_handlers


def create_app(config=None):
    """Application factory."""
    app = Flask(__name__)
    app.config.from_object(config or get_config())

    # Configure centralized logging
    setup_logging(app)

    <% if (database) { %>
    if not app.config.get('TESTING'):
        try:
            init_db()
        except Exception as e:
            app.logger.warning(f"Database connection warning: {e}")
    <% } %>

    # Request logging hook
    @app.after_request
    def log_request(response):
        app.logger.info(f"{request.method} {request.path} {response.status_code}")
        return response

    # Register blueprints
    app.register_blueprint(api_bp)
    app.register_blueprint(items_bp)

    # Register error handlers
    register_error_handlers(app)

    @app.route('/')
    def index():
        return jsonify({"message": "Welcome to <%= projectName %> API"})

    return app


app = create_app()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
