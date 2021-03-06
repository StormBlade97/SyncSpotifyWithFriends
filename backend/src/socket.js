const server = require('../server');
const WebSocket = require('ws');

const wss = new WebSocket.Server({
    perMessageDeflate: false,
    server
});

wss.on('connection', (ws, req) => {
    ws.on('message', (message) => {
        console.log("Message " + message)
    });
    console.log("Connected to " + req.socket.remoteAddress);
    ws.send(JSON.stringify({ type: '', payload: '' }));
    ws.send(JSON.stringify({ type: '', payload: 'This is a message' }));
    ws.send('I am an error message');
});

setTimeout(() => {
    wss.clients.forEach(listener => {
        listener.ping()
    })
}, 30 * 1000);

module.exports = wss;