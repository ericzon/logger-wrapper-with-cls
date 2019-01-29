const clsRequestId = (namespace, generateId) => {
    return (req, res, next) => {
        const requestId = req.get('X-Request-Id') || generateId();
        res.set('X-Request-Id', requestId);

        namespace.run(() => {
            namespace.set('reqId', requestId);
            next();
        });
    }
};

module.exports = clsRequestId;
