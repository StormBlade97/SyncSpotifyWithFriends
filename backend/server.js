const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const server = http.createServer(app);
require('dotenv').config();

const routes = require('./src/routes/routes');
app.use('/api', routes);

// app.use('/', express.static(path.join(__dirname, '..', 'frontend', 'dist', 'front-end')));

server.listen(4000, () => {
    console.log('Up and running on port 4000');
});

// run poller
require('./src/poller')();

module.exports = server;
