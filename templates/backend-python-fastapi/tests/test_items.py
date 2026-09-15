import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_create_item():
    response = client.post("/api/items/", json={"title": "Test Item", "description": "A test"})
    assert response.status_code == 201
    data = response.json()
    assert data["title"] == "Test Item"
    assert data["completed"] is False
    assert "id" in data


def test_create_item_missing_title():
    response = client.post("/api/items/", json={"description": "No title"})
    assert response.status_code == 422


def test_list_items():
    client.post("/api/items/", json={"title": "Item for listing"})
    response = client.get("/api/items/")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    assert len(data) >= 1


def test_get_item():
    created = client.post("/api/items/", json={"title": "Find Me"})
    item_id = created.json()["id"]
    response = client.get(f"/api/items/{item_id}")
    assert response.status_code == 200
    assert response.json()["title"] == "Find Me"


def test_get_item_not_found():
    response = client.get("/api/items/99999")
    assert response.status_code == 404


def test_update_item():
    created = client.post("/api/items/", json={"title": "Update Me"})
    item_id = created.json()["id"]
    response = client.put(f"/api/items/{item_id}", json={"title": "Updated", "completed": True})
    assert response.status_code == 200
    assert response.json()["title"] == "Updated"
    assert response.json()["completed"] is True


def test_delete_item():
    created = client.post("/api/items/", json={"title": "Delete Me"})
    item_id = created.json()["id"]
    response = client.delete(f"/api/items/{item_id}")
    assert response.status_code == 204


def test_delete_item_not_found():
    response = client.delete("/api/items/99999")
    assert response.status_code == 404
