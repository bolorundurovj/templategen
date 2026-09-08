class AppService {
  getHello() {
    return { message: 'Welcome to <%= projectName %> NestJS API' };
  }

  getHealth() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}

module.exports = { AppService };
