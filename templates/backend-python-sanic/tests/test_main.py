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


def test_info():
    _, response = app.test_client.get("/api/info")
    assert response.status == 200
    assert response.json["version"] == "0.1.0"
    assert response.json["environment"] == "development"


def test_timing_header():
    _, response = app.test_client.get("/api/health")
    assert "X-Process-Time" in response.headers


def test_not_found():
    _, response = app.test_client.get("/api/nonexistent")
    assert response.status == 404
    assert response.json["status_code"] == 404
    assert response.json["error"] == "Not found"
