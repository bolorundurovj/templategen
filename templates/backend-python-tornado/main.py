import tornado.ioloop
import tornado.web
from datetime import datetime
from handlers import BaseHandler
from routes.items import ItemsHandler, ItemDetailHandler
from logger import logger


class MainHandler(BaseHandler):
    def get(self):
        self.write({"message": "Welcome to <%= projectName %> API"})


class HealthHandler(BaseHandler):
    def get(self):
        self.write({"status": "ok", "timestamp": datetime.utcnow().isoformat()})


class InfoHandler(BaseHandler):
    def get(self):
        self.write({
            "name": "<%= projectName %>",
            "version": "0.1.0",
            "environment": "development"
        })


class NotFoundHandler(BaseHandler):
    def prepare(self):
        super().prepare()
        self.set_status(404)
        self.finish({"error": "Not found", "status_code": 404})


def make_app():
    return tornado.web.Application(
        [
            (r"/", MainHandler),
            (r"/api/health", HealthHandler),
            (r"/api/info", InfoHandler),
            (r"/api/items", ItemsHandler),
            (r"/api/items/([0-9]+)", ItemDetailHandler),
        ],
        default_handler_class=NotFoundHandler,
    )


if __name__ == "__main__":
    logger.info("Starting Tornado server on port 8888...")
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()
