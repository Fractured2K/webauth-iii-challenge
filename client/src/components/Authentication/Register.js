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
				<form>
					<input
						type="text"
						name="username"
						placeholder="username"
						value={this.state.username}
						onChange={this.handleChanges}
					/>
					<input
						type="password"
						name="password"
						placeholder="password"
						value={this.state.password}
						onChange={this.handleChanges}
					/>
					<input
						type="text"
						name="department"
						placeholder="department"
						value={this.state.department}
						onChange={this.handleChanges}
					/>
				</form>
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
