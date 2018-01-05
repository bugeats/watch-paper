const express = require('express');
const http = require('http');
const serveIndex = require('serve-index');

const app = express();

const staticPath = './';

// -----------------------------------------------------------------------------

app.use(
    '/',
    express.static(staticPath),
    serveIndex(staticPath, { 'icons': true })
);

// -----------------------------------------------------------------------------

const server = http.createServer(app);

module.exports = server;
