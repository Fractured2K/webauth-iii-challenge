import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';

import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
			</div>
		);
	}
}

export default App;
