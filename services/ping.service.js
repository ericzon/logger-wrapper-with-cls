const { getLogger } = require('../utils/logger');

class PingService {

  static sayHello() {
    return new Promise((resolve) => {
      getLogger().info( 'saying hello...');
      resolve('Hello Ping');
    });
  }
}

module.exports = PingService;
