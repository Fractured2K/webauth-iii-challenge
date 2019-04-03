const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../models/Users');

// register user
router.post('/register', async (req, res) => {
	try {
		let user = req.body;

		user.password = bcrypt.hashSync(user.password, 10);

		const newUser = await Users.add(user);
		res.status(201).json(newUser);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: 'Sorry, but there was an error while creating that user'
		});
	}
});

// login user
router.post('/login', async (req, res) => {
	try {
		let { username, password } = req.body;

		const user = await Users.findBy({ username }).first();

		if (user && bcrypt.compareSync(password, user.password)) {
			const token = generateToken(user);
			return res.status(200).json(token);
		}

		return res
			.status(401)
			.json({ message: 'Sorry, incorrect username or password' });
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: 'Sorry, but there was an error while trying to log in '
		});
	}
});

// get all users
router.get('/users', async (req, res) => {});

function generateToken(user) {
	const payload = {
		subject: user.id,
		username: user.username,
		department: user.department
	};

	const options = {
		expiresIn: '1d'
	};

	return jwt.sign(payload, process.env.JWT_SECRET, options);
}

module.exports = router;
