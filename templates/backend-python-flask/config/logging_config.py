import os
import logging
from pathlib import Path


def setup_logging(app):
    """Configure centralized logging with optional file-based logging."""
    log_level = os.getenv("LOG_LEVEL", "INFO").upper()
    log_to_file = os.getenv("LOG_TO_FILE", "false").lower() == "true" or bool(os.getenv("LOG_FILE"))
    log_file = os.getenv("LOG_FILE", "logs/app.log")

    formatter = logging.Formatter(
        fmt="[%(asctime)s] [%(levelname)s] in %(module)s: %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S"
    )

    app.logger.setLevel(getattr(logging, log_level, logging.INFO))
    for handler in app.logger.handlers[:]:
        app.logger.removeHandler(handler)

    console_handler = logging.StreamHandler()
    console_handler.setFormatter(formatter)
    app.logger.addHandler(console_handler)

    if log_to_file:
        log_path = Path(log_file)
        log_path.parent.mkdir(parents=True, exist_ok=True)
        file_handler = logging.FileHandler(str(log_path))
        file_handler.setFormatter(formatter)
        app.logger.addHandler(file_handler)
