'use strict';

var app    = require('express')();
var server = require('http').Server(app);
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./passport')(app);
require('./routes')(app);

server.listen(global.config.port || 8080, function() {
	console.info('Server listening on Port: ' + global.config.port);
});

module.exports = app;