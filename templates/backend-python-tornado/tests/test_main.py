import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

import json
from tornado.testing import AsyncHTTPTestCase
from main import make_app

class TestTornadoApp(AsyncHTTPTestCase):
    def get_app(self):
        return make_app()

    def test_root(self):
        response = self.fetch('/')
        assert response.code == 200
        data = json.loads(response.body)
        assert "Welcome to" in data["message"]

    def test_health(self):
        response = self.fetch('/api/health')
        assert response.code == 200
        data = json.loads(response.body)
        assert data["status"] == "ok"
