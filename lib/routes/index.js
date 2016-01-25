'use strict';

var express = require('express');

module.exports = function(app) {
	app.use('/js', express.static(global.root + '/public/js'))
	   .use('/css', express.static(global.root + '/public/css'))
	   .use('/img', express.static(global.root + '/public/img'));
	app.get('/', function (req, res) {
		res.render('index', { user: req.user });
	});

	app.get('/login', function (req, res) {
		res.render('login', { user: req.user });
	});

	app.get('/logout', function (req, res) {
		req.logout();
		res.redirect('/');
	});

}