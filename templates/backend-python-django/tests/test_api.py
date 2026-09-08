from django.test import TestCase, Client
import json

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

    def test_nonexistent_endpoint(self):
        response = self.client.get('/api/nonexistent')
        self.assertEqual(response.status_code, 404)
