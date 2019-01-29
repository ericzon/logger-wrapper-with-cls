const { getLogger } = require('../utils/logger');
const PingService = require('../services/ping.service');

module.exports = (app) => {
    app.get('/ping', async (req, res) => {
        const helloPing = await PingService.sayHello();

        getLogger().info( `Ping says: ${helloPing}`);
        res.end();
    });
};
