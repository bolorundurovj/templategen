import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from main import app


def test_items_crud():
    # 1. Create item
    _, res = app.test_client.post("/api/items", json={"title": "Sanic Item", "description": "Desc"})
    assert res.status == 201
    created = res.json["data"]
    item_id = created["id"]
    assert created["title"] == "Sanic Item"

    # 2. List items
    _, res = app.test_client.get("/api/items")
    assert res.status == 200
    items = res.json["data"]
    assert any(i["id"] == item_id for i in items)

    # 3. Get item
    _, res = app.test_client.get(f"/api/items/{item_id}")
    assert res.status == 200
    assert res.json["data"]["title"] == "Sanic Item"

    # 4. Update item
    _, res = app.test_client.put(f"/api/items/{item_id}", json={"completed": True, "title": "Updated Item"})
    assert res.status == 200
    assert res.json["data"]["completed"] is True
    assert res.json["data"]["title"] == "Updated Item"

    # 5. Delete item
    _, res = app.test_client.delete(f"/api/items/{item_id}")
    assert res.status == 200

    # 6. Verify 404
    _, res = app.test_client.get(f"/api/items/{item_id}")
    assert res.status == 404
