from flask import Blueprint, jsonify
from datetime import datetime

api_bp = Blueprint('api', __name__, url_prefix='/api')


@api_bp.route('/health')
def health():
    return jsonify({
        "status": "ok",
        "timestamp": datetime.utcnow().isoformat()
    })


@api_bp.route('/info')
def info():
    return jsonify({
        "name": "<%= projectName %>",
        "version": "0.1.0",
        "environment": "development",
    })
