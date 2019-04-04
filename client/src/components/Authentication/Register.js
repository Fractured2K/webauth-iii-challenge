import React, { Component } from 'react';

class Register extends Component {
	state = {
		username: '',
		password: '',
		department: ''
	};

	render() {
		return (
			<div>
				<h1>Register</h1>
			</div>
		);
	}

	handleChanges = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
}

export default Register;
