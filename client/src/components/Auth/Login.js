import React, { Component } from 'react';

class Login extends Component {
	state = {
		username: '',
		password: '',
		department: ''
	};

	render() {
		return (
			<div>
				<h1>Login</h1>
			</div>
		);
	}

	handleChanges = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
}

export default Login;
