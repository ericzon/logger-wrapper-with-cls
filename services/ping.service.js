const { getNamespace } = require('cls-hooked');

const { getLogger } = require('../utils/logger');

class PingService {
    static sayHello() {
        return new Promise((resolve) => {
            const namespace = getNamespace('logger');

            getLogger().info({ requestId: namespace.get('reqId') }, 'saying hello...');
            resolve('Hello Ping');
        });
    }
}

module.exports = PingService;
