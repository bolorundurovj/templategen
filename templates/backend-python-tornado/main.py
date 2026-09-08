import tornado.ioloop
import tornado.web
from datetime import datetime

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write({"message": "Welcome to <%= projectName %> API"})

class HealthHandler(tornado.web.RequestHandler):
    def get(self):
        self.write({"status": "ok", "timestamp": datetime.utcnow().isoformat()})

def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
        (r"/api/health", HealthHandler),
    ])

if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()
