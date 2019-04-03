const jwt = require('jsonwebtoken');

module.exports = {
	restricted
};

function restricted(req, res, next) {
	const token = req.headers.authorization;

	if (token) {
		return jwt.verify(
			token,
			process.env.JWT_SECRET,
			(err, decodedToken) => {
				if (err)
					return res
						.status(401)
						.json({ message: 'Invalid credentials' });

				req.decodedJwt = decodedToken;
				return next();
			}
		);
	}

	return res.status(401).json({ message: 'Please provide a token' });
}
