import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		const { userName, userSurname, userAge } = this.props;
		return <div>
			<p>Hey, {userName} {userSurname}!</p>
			<p>Are you {userAge} years old{'?'}</p>
		</div>;
	}
};

export default connect(state => ({
	userName: state.user.name,
	userSurname: state.user.surname,
	userAge: state.user.age
}))(App);