import os


class Settings:
    """Application configuration loaded from environment variables."""

    APP_NAME: str = os.getenv("APP_NAME", "<%= projectName %>")
    VERSION: str = os.getenv("VERSION", "0.1.0")
    DEBUG: bool = os.getenv("DEBUG", "true").lower() == "true"


settings = Settings()
