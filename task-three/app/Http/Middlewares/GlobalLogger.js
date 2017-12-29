const globalLogger = (req, res, next) => {
    console.log('New', req.method, 'request from', req.ip, 'for', req.url);
    next();
};

module.exports = { globalLogger };