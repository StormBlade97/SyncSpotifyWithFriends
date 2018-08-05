const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
require('dotenv').config();

const routes = require('./src/routes/routes');
app.use(routes);

server.listen(4000, () => {
    console.log('Up and running on port 4000');
});

// run poller
require('./src/poller')();

module.exports = server;
