const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../models/Users');

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

module.exports = router;
