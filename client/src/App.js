import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';

import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Users from './components/Users';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/register">Register</NavLink>
					<NavLink to="/login">Login</NavLink>
					<NavLink to="/users">Users</NavLink>
				</header>

				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/users" component={Users} />
			</div>
		);
	}
}

export default App;
