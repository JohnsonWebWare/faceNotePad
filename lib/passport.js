'use strict';

var debugLog = global.util.debuglog('gitAuth');

var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;


passport.serializeUser(function (user, done) {
	done(null, user);
});
passport.deserializeUser(function (obj, done) {
	done(null, obj);
});

passport.use(new GitHubStrategy(global.config.gitAuth, function (accessToken, refreshToken, profile, done) {
	process.nextTick(function () {
		debugLog(global.util.inspect(profile._json, { depth: null }));
		return done(null, profile);
	});
}));

module.exports = function (app) {
	app.use(passport.initialize());
	app.use(passport.session());

	app.get('/auth', 
		passport.authenticate('github', { scope: ['user'] }),
		function (req, res) {
			console.error('How did I get here?');
		}
	);
	app.get('/auth/callback',
		passport.authenticate('github', { failureRedirect: '/login' }),
		function (req, res) {
			res.redirect('/');
		});

	app.get('/logout', function (req, res) {
		req.logout();
		res.redirect('/');
	});
}