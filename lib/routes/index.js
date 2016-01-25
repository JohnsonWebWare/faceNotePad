'use strict';

var express = require('express');
var debuglog = global.util.debuglog('MasterRouter');

module.exports = function(app) {
	app.use('/js', express.static(global.root + '/public/js'))
	   .use('/css', express.static(global.root + '/public/css'))
	   .use('/img', express.static(global.root + '/public/img'));

	app.get('/', function (req, res) {
		debuglog(global.util.inspect(req.user, { depth: null }));
		res.render('index', { user: req.user });
	});

	app.get('/profile', function (req, res) {
		debuglog('Profile Route', global.util.inspect(req.user, { depth: null }));

		res.render('profile', { user: req.user || {} });
	});

	app.get('/login', function (req, res) {
		debuglog(global.util.inspect(req.user, { depth: null }));
		res.render('login', { });
	});

	app.get('/logout', function (req, res) {
		req.logout();
		res.redirect('/');
	});

}