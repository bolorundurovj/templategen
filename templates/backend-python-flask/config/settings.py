import os


class BaseConfig:
    """Base configuration."""
    SECRET_KEY = os.getenv('SECRET_KEY', 'change-me-in-production')
    DEBUG = False
    TESTING = False


class DevConfig(BaseConfig):
    """Development configuration."""
    DEBUG = True


class TestConfig(BaseConfig):
    """Test configuration."""
    TESTING = True


config_by_name = {
    'development': DevConfig,
    'testing': TestConfig,
    'production': BaseConfig,
}


def get_config():
    env = os.getenv('FLASK_ENV', 'development')
    return config_by_name.get(env, DevConfig)
