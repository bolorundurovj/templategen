from flask import Blueprint, jsonify, request
from datetime import datetime, timezone

items_bp = Blueprint('items', __name__, url_prefix='/api/items')

items_db = []
next_id = 1


@items_bp.route('', methods=['GET'], strict_slashes=False)
@items_bp.route('/', methods=['GET'], strict_slashes=False)
def list_items():
    return jsonify(items_db)


@items_bp.route('/<item_id>', methods=['GET'], strict_slashes=False)
@items_bp.route('/<item_id>/', methods=['GET'], strict_slashes=False)
def get_item(item_id):
    item = next((i for i in items_db if i['id'] == item_id), None)
    if not item:
        return jsonify({"error": "Item not found"}), 404
    return jsonify(item)


@items_bp.route('', methods=['POST'], strict_slashes=False)
@items_bp.route('/', methods=['POST'], strict_slashes=False)
def create_item():
    global next_id
    data = request.get_json()
    if not data or not data.get('title'):
        return jsonify({"error": "Title is required"}), 400
    now = datetime.now(timezone.utc).isoformat()
    item = {
        "id": str(next_id),
        "title": data['title'],
        "description": data.get('description', ''),
        "completed": False,
        "created_at": now,
        "updated_at": now,
    }
    next_id += 1
    items_db.append(item)
    return jsonify(item), 201


@items_bp.route('/<item_id>', methods=['PUT'], strict_slashes=False)
@items_bp.route('/<item_id>/', methods=['PUT'], strict_slashes=False)
def update_item(item_id):
    item = next((i for i in items_db if i['id'] == item_id), None)
    if not item:
        return jsonify({"error": "Item not found"}), 404
    data = request.get_json()
    if data.get('title') is not None:
        item['title'] = data['title']
    if data.get('description') is not None:
        item['description'] = data['description']
    if data.get('completed') is not None:
        item['completed'] = data['completed']
    item['updated_at'] = datetime.now(timezone.utc).isoformat()
    return jsonify(item)


@items_bp.route('/<item_id>', methods=['DELETE'], strict_slashes=False)
@items_bp.route('/<item_id>/', methods=['DELETE'], strict_slashes=False)
def delete_item(item_id):
    global items_db
    original_len = len(items_db)
    items_db = [i for i in items_db if i['id'] != item_id]
    if len(items_db) == original_len:
        return jsonify({"error": "Item not found"}), 404
    return '', 204
