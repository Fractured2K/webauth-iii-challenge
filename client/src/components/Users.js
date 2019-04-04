import React, { Component } from 'react';
import axios from 'axios';

import isAuthenticated from './Auth/isAuthenticated';

class Users extends Component {
	state = {
		users: []
	};

	render() {
		return (
			<div>
				<h1>Users</h1>
			</div>
		);
	}
}

export default isAuthenticated(Users);
