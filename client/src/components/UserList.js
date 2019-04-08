import React, { Component, Fragment } from 'react';
import axios from 'axios';

import isAuthenticated from './Auth/isAuthenticated';
import User from './User';

class UserList extends Component {
	state = {
		users: []
	};

	render() {
		return (
			<Fragment>
				<h2>List of Users</h2>
				<ul>
					{this.state.users.map(user => (
						<ul key={user.id}>
							<User {...user} />
						</ul>
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

export default isAuthenticated(UserList);
