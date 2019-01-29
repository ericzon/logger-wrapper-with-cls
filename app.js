const express = require('express');
const cuid = require('cuid');

const routes = require('./routes');
const { createLogger } = require('./utils/logger');
const clsRequestId = require('./middlewares/cls');

const app = express();
const port = process.env.PORT || 3000;
const log = createLogger({
	prettyPrint: true,
	level: 'info'
});

app.use(clsRequestId(log.cls, cuid));

routes(app);

app.listen(port, () => {
	log.info(`Server listening in ${port}`);
});
