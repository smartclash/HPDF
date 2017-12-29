const start = require('./../bootstrap/bootstrap');

const port = process.env.PORT || 8080;
start.app.listen(port, () => console.log('Listening on port', port));
