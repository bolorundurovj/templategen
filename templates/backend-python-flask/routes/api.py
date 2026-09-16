from flask import Blueprint, jsonify
from datetime import datetime, timezone

api_bp = Blueprint('api', __name__, url_prefix='/api')


@api_bp.route('/health', methods=['GET'], strict_slashes=False)
def health():
    """Health check endpoint."""
    return jsonify({
        "status": "ok",
        "timestamp": datetime.now(timezone.utc).isoformat()
    })


@api_bp.route('/info')
def info():
    return jsonify({
        "name": "<%= projectName %>",
        "version": "0.1.0",
        "environment": "development",
    })
