const db = require('../database/dbConfig');

module.exports = {
	find,
	findBy
};

function find() {
	return db('users');
}

function findBy(filter) {
	return db('users').where(filter);
}
