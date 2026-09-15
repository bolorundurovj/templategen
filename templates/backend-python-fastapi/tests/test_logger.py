import os
import sys
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

import logging
from app.logger import logger


def test_logger_instance():
    assert isinstance(logger, logging.Logger)
    assert logger.name == "app"


def test_logger_emits(caplog):
    with caplog.at_level(logging.INFO, logger="app"):
        logger.info("Test info log")
        logger.warning("Test warn log")
        logger.error("Test error log")

    messages = [record.message for record in caplog.records]
    assert "Test info log" in messages
    assert "Test warn log" in messages
    assert "Test error log" in messages
