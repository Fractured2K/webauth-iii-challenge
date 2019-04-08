import React from 'react';

const User = props => {
	return (
		<div>
			<h1>Username: {props.username}</h1>
			<li>Department: {props.department}</li>
		</div>
	);
};

export default User;
