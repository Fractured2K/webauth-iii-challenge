import React, { Component } from 'react';
import axios from 'axios';

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

	onSubmit = e => {
		e.preventDefault();

		axios
			.post('http://localhost:5000/api/login', this.state)
			.then(res => {
				localStorage.setItem('token', res.data);

				this.setState({
					username: '',
					password: '',
					department: ''
				});
			})
			.catch(err => console.log(err));
	};
}

export default Login;
