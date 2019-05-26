const passport = require('passport');
const User = require('../models/user');
const { secret } = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// setup options for JWT strategy

const jwtOptions = {
	// tell passport to look for an header called authorization to find the token
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: secret
};

// create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
	// payload is the decoded jwt token (userid & issuetime)
	// see if the user id in the payload exists in our database
	// if it does, call 'done' with the user object
	// otherwise, call done without a user object
	User.findById(payload.sub, function(err, user) {
		if (err) return done(err, false);

		if (user) {
			done(null, user);
		} else {
			done(null, false);
		}
	});
});

// Tell passport to use this strategy
passport.use(jwtLogin);
