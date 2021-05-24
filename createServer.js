const express = require('express');
const createRoutes = require('./src/routes.js');

function createServer() {
    const app = express();
    app.use(createRoutes());
    return app;
}

module.exports = { createServer }