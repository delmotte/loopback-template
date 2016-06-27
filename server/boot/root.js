var express = require('express');

module.exports = function (server) {
    // Install a `/` route that returns server status
    var router = server.loopback.Router();
    router.get('/status', server.loopback.status());
    server.use(router);
    server.use('/uploads', express.static(__dirname + '/../../uploads'));
};
