from sanic import Blueprint, json
from models.item import Item

items_bp = Blueprint("items", url_prefix="/api/items")

items_store = {}
current_id = 1


@items_bp.get("/")
async def list_items(request):
    return json({"data": [item.to_dict() for item in items_store.values()]})


@items_bp.post("/")
async def create_item(request):
    global current_id
    data = request.json
    if not data or "title" not in data:
        return json({"error": "Title is required"}, status=400)

    item = Item(
        id=current_id,
        title=data["title"],
        description=data.get("description", ""),
        completed=bool(data.get("completed", False)),
    )
    items_store[current_id] = item
    current_id += 1
    return json({"data": item.to_dict()}, status=201)


@items_bp.get("/<item_id:int>")
async def get_item(request, item_id: int):
    item = items_store.get(item_id)
    if not item:
        return json({"error": "Item not found"}, status=404)
    return json({"data": item.to_dict()})


@items_bp.put("/<item_id:int>")
async def update_item(request, item_id: int):
    item = items_store.get(item_id)
    if not item:
        return json({"error": "Item not found"}, status=404)

    data = request.json
    if not data:
        return json({"error": "Invalid request body"}, status=400)

    if "title" in data:
        item.title = data["title"]
    if "description" in data:
        item.description = data["description"]
    if "completed" in data:
        item.completed = bool(data["completed"])

    return json({"data": item.to_dict()})


@items_bp.delete("/<item_id:int>")
async def delete_item(request, item_id: int):
    if item_id not in items_store:
        return json({"error": "Item not found"}, status=404)
    del items_store[item_id]
    return json({"message": "Item deleted"})
