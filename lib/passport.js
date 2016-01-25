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

passport.use(new GitHubStrategy(global.config.gitAuth), function (accessToken, refreshToken, profile, done) {
	process.nextTick(function () {
		global.util.debugLog(global.util.inspect(profile, { depth: null }));
		return done(null, profile);
	});
});