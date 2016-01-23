'use strict';

var app    = require('express')();
var server = require('http').Server(app);

server.listen(global.config.port || 8080, function() {
	console.info('Server listening on Port: ' + global.config.port);
});

module.exports = app;