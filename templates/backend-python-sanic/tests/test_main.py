import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from main import app

def test_root():
    _, response = app.test_client.get("/")
    assert response.status == 200
    assert "Welcome to" in response.json["message"]

def test_health():
    _, response = app.test_client.get("/api/health")
    assert response.status == 200
    assert response.json["status"] == "ok"
