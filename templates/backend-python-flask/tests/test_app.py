import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_root_endpoint(client):
    res = client.get('/')
    assert res.status_code == 200
    data = res.get_json()
    assert 'message' in data
    assert 'Welcome to' in data['message']

def test_health_endpoint(client):
    res = client.get('/api/health')
    assert res.status_code == 200
    data = res.get_json()
    assert data.get('status') == 'ok'
    assert 'timestamp' in data

def test_nonexistent_endpoint(client):
    res = client.get('/api/nonexistent')
    assert res.status_code == 404
