import json
from handlers import BaseHandler
from models.item import Item

items_store = {}
current_id = 1


class ItemsHandler(BaseHandler):
    def get(self):
        self.write({"data": [item.to_dict() for item in items_store.values()]})

    def post(self):
        global current_id
        try:
            data = json.loads(self.request.body.decode("utf-8"))
        except (ValueError, UnicodeDecodeError):
            self.set_status(400)
            self.write({"error": "Invalid JSON body", "status_code": 400})
            return

        if not data or "title" not in data:
            self.set_status(400)
            self.write({"error": "Title is required", "status_code": 400})
            return

        item = Item(
            id=current_id,
            title=data["title"],
            description=data.get("description", ""),
            completed=bool(data.get("completed", False)),
        )
        items_store[current_id] = item
        current_id += 1
        self.set_status(201)
        self.write({"data": item.to_dict()})


class ItemDetailHandler(BaseHandler):
    def get(self, item_id):
        item = items_store.get(int(item_id))
        if not item:
            self.set_status(404)
            self.write({"error": "Item not found", "status_code": 404})
            return
        self.write({"data": item.to_dict()})

    def put(self, item_id):
        item = items_store.get(int(item_id))
        if not item:
            self.set_status(404)
            self.write({"error": "Item not found", "status_code": 404})
            return

        try:
            data = json.loads(self.request.body.decode("utf-8"))
        except (ValueError, UnicodeDecodeError):
            self.set_status(400)
            self.write({"error": "Invalid JSON body", "status_code": 400})
            return

        if "title" in data:
            item.title = data["title"]
        if "description" in data:
            item.description = data["description"]
        if "completed" in data:
            item.completed = bool(data["completed"])

        self.write({"data": item.to_dict()})

    def delete(self, item_id):
        item_id = int(item_id)
        if item_id not in items_store:
            self.set_status(404)
            self.write({"error": "Item not found", "status_code": 404})
            return
        del items_store[item_id]
        self.write({"message": "Item deleted"})
