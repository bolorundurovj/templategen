import json
from django.test import TestCase, Client
from project.models import Item


class ApiTests(TestCase):
    def setUp(self):
        self.client = Client()

    def test_root_endpoint(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.content)
        self.assertIn('message', data)
        self.assertIn('Welcome to', data['message'])

    def test_health_endpoint(self):
        response = self.client.get('/api/health')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.content)
        self.assertEqual(data.get('status'), 'ok')
        self.assertIn('timestamp', data)

    def test_info_endpoint(self):
        response = self.client.get('/api/info')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.content)
        self.assertIn('name', data)
        self.assertEqual(data.get('version'), '0.1.0')
        self.assertEqual(data.get('environment'), 'development')

    def test_process_time_header(self):
        response = self.client.get('/api/health')
        self.assertIn('X-Process-Time', response.headers)

    def test_nonexistent_endpoint_returns_json_404(self):
        response = self.client.get('/api/nonexistent')
        self.assertEqual(response.status_code, 404)
        data = json.loads(response.content)
        self.assertEqual(data.get('status_code'), 404)
        self.assertEqual(data.get('error'), 'Not found')

    def test_item_crud_lifecycle(self):
        # 1. Create item
        payload = {
            'title': 'Test Item',
            'description': 'A test item description',
            'completed': False
        }
        res_create = self.client.post(
            '/api/items',
            data=json.dumps(payload),
            content_type='application/json'
        )
        self.assertEqual(res_create.status_code, 201)
        created = json.loads(res_create.content)['data']
        item_id = created['id']
        self.assertEqual(created['title'], 'Test Item')

        # 2. List items
        res_list = self.client.get('/api/items')
        self.assertEqual(res_list.status_code, 200)
        items = json.loads(res_list.content)['data']
        self.assertTrue(any(i['id'] == item_id for i in items))

        # 3. Get item by id
        res_get = self.client.get(f'/api/items/{item_id}')
        self.assertEqual(res_get.status_code, 200)
        item = json.loads(res_get.content)['data']
        self.assertEqual(item['title'], 'Test Item')

        # 4. Update item
        res_update = self.client.put(
            f'/api/items/{item_id}',
            data=json.dumps({'completed': True, 'title': 'Updated Title'}),
            content_type='application/json'
        )
        self.assertEqual(res_update.status_code, 200)
        updated = json.loads(res_update.content)['data']
        self.assertTrue(updated['completed'])
        self.assertEqual(updated['title'], 'Updated Title')

        # 5. Delete item
        res_delete = self.client.delete(f'/api/items/{item_id}')
        self.assertEqual(res_delete.status_code, 200)

        # 6. Verify 404 after deletion
        res_after = self.client.get(f'/api/items/{item_id}')
        self.assertEqual(res_after.status_code, 404)
