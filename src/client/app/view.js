import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		const { name, surname, age } = this.props.user;
		return <div>
			<p>Hey, {name} {surname}!</p>
			<p>Are you {age} years old?</p>
		</div>;
	}
};

export default connect(state => state)(App);