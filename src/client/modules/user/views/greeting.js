import React, { Component, PropTypes } from 'react';

export default class Greeting extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		surname: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired
	}

	render() {
		const { name, surname, age } = this.props;
		return <div>
			<p>Hey, {name} {surname}!</p>
			<p>You are {age} years old.</p>
		</div>;
	}
};