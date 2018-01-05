const express = require('express');
const http = require('http');
const app = express();

// -----------------------------------------------------------------------------

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// -----------------------------------------------------------------------------

const server = http.createServer(app);

module.exports = server;

