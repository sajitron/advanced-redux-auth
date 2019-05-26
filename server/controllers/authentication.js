const User = require('../models/user');

exports.signup = function(req, res, next) {
	const email = req.body.email;
	const password = req.body.password;

	if (!email || !password) {
		return res.status(422).send({ error: 'You must provide email and password' });
	}

	// check if a user with the same email exists
	User.findOne({ email: email }, (err, existingUser) => {
		if (err) return next(err);

		// if a user with email exists, return an error
		if (existingUser) {
			return res.status(422).send({ error: 'Email already in use' });
		}
		// if user with email does not exist
		const user = new User({
			email,
			password
		});

		user.save(function(err) {
			if (err) return next(err);

			// respond to request indicating the user was created
			res.json(user);
		});
	});
};
