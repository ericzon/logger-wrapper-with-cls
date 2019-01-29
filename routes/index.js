const { getNamespace } = require('cls-hooked');

const { getLogger } = require('../utils/logger');
const PingService = require('../services/ping.service');

module.exports = (app) => {
    const namespace = getNamespace('logger');

    app.get('/ping', async (req, res) => {
        const helloPing = await PingService.sayHello();

        getLogger().info({ requestId: namespace.get('reqId') }, `Ping says: ${helloPing}`);
        res.end();
    });
};
