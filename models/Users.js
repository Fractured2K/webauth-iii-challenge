const db = require('../database/dbConfig');

module.exports = {
	find,
	findBy,
	findById
};

function find() {
	return db('users');
}

function findBy(filter) {
	return db('users').where(filter);
}

function findById(id) {
	return db('users')
		.where({ id })
		.first();
}
