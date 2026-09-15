import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

import pytest
from app import create_app
from config.settings import TestConfig

@pytest.fixture
def client():
    app = create_app(TestConfig)
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_create_item(client):
    res = client.post('/api/items/', json={'title': 'Test Item', 'description': 'A test'})
    assert res.status_code == 201
    data = res.get_json()
    assert data['title'] == 'Test Item'
    assert data['completed'] is False

def test_create_item_missing_title(client):
    res = client.post('/api/items/', json={'description': 'No title'})
    assert res.status_code == 400

def test_list_items(client):
    client.post('/api/items/', json={'title': 'Item 1'})
    res = client.get('/api/items/')
    assert res.status_code == 200
    data = res.get_json()
    assert isinstance(data, list)

def test_get_item(client):
    created = client.post('/api/items/', json={'title': 'Find Me'})
    item_id = created.get_json()['id']
    res = client.get(f'/api/items/{item_id}')
    assert res.status_code == 200
    assert res.get_json()['title'] == 'Find Me'

def test_get_item_not_found(client):
    res = client.get('/api/items/99999')
    assert res.status_code == 404

def test_update_item(client):
    created = client.post('/api/items/', json={'title': 'Update Me'})
    item_id = created.get_json()['id']
    res = client.put(f'/api/items/{item_id}', json={'title': 'Updated', 'completed': True})
    assert res.status_code == 200
    assert res.get_json()['title'] == 'Updated'

def test_delete_item(client):
    created = client.post('/api/items/', json={'title': 'Delete Me'})
    item_id = created.get_json()['id']
    res = client.delete(f'/api/items/{item_id}')
    assert res.status_code == 204

def test_delete_item_not_found(client):
    res = client.delete('/api/items/99999')
    assert res.status_code == 404
