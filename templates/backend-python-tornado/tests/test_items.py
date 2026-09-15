import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

import json
from tornado.testing import AsyncHTTPTestCase
from main import make_app


class TestTornadoItems(AsyncHTTPTestCase):
    def get_app(self):
        return make_app()

    def test_items_crud_lifecycle(self):
        # 1. Create item
        payload = json.dumps({"title": "Tornado Item", "description": "Tornado Test"})
        response = self.fetch('/api/items', method='POST', body=payload, headers={'Content-Type': 'application/json'})
        assert response.code == 201
        created = json.loads(response.body)["data"]
        item_id = created["id"]
        assert created["title"] == "Tornado Item"

        # 2. List items
        response = self.fetch('/api/items')
        assert response.code == 200
        items = json.loads(response.body)["data"]
        assert any(i["id"] == item_id for i in items)

        # 3. Get item
        response = self.fetch(f'/api/items/{item_id}')
        assert response.code == 200
        assert json.loads(response.body)["data"]["title"] == "Tornado Item"

        # 4. Update item
        update_payload = json.dumps({"title": "Updated Tornado Item", "completed": True})
        response = self.fetch(f'/api/items/{item_id}', method='PUT', body=update_payload, headers={'Content-Type': 'application/json'})
        assert response.code == 200
        updated = json.loads(response.body)["data"]
        assert updated["completed"] is True
        assert updated["title"] == "Updated Tornado Item"

        # 5. Delete item
        response = self.fetch(f'/api/items/{item_id}', method='DELETE')
        assert response.code == 200

        # 6. Verify 404
        response = self.fetch(f'/api/items/{item_id}')
        assert response.code == 404
