import React, { Component, Fragment } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';

import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import UserList from './components/UserList';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<NavLink to="/">Home</NavLink>{' '}
					{!localStorage.getItem('token') ? (
						<Fragment>
							<NavLink to="/register">Register</NavLink>{' '}
							<NavLink to="/login">Login</NavLink>{' '}
						</Fragment>
					) : (
						<Fragment>
							<NavLink to="/users">Users</NavLink>{' '}
							<NavLink to="/" onClick={this.logOut}>
								Log out
							</NavLink>{' '}
						</Fragment>
					)}
				</header>

				<Route
					path="/register"
					render={props => <Register {...props} />}
				/>
				<Route path="/login" render={props => <Login {...props} />} />
				<Route path="/users" component={UserList} />
			</div>
		);
	}

	logOut = () => {
		localStorage.removeItem('token');
	};
}

export default App;
