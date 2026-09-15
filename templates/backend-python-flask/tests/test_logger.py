import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

import pytest
from app import create_app
from config.settings import TestConfig


def test_logger_setup():
    app = create_app(TestConfig)
    assert app.logger is not None
    assert len(app.logger.handlers) > 0
