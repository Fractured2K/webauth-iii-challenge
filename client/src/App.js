import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';

import Register from './components/Auth/Register';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Route path="/register" component={Register} />
			</div>
		);
	}
}

export default App;
