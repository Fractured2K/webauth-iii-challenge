import React, { Component, Fragment } from 'react';
import axios from 'axios';

import isAuthenticated from './Auth/isAuthenticated';

class Users extends Component {
	state = {
		users: []
	};

	render() {
		return (
			<Fragment>
				<h2>List of Users</h2>
				<ul>
					{this.state.users.map(u => (
						<li key={u.id}>{u.username}</li>
					))}
				</ul>
			</Fragment>
		);
	}

	componentDidMount = () => {
		axios
			.get('/users')
			.then(res => {
				this.setState({ users: res.data });
			})
			.catch(err => {
				console.log(err);
			});
	};
}

export default isAuthenticated(Users);
