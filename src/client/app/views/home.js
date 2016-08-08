import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'app/styles/home.less';

class HomePage extends Component {
	render() {
		return <div id='home' className='home'>
			Home page.
		</div>;
	}
};

const stateToProps = state => state;
const dispatchToProps = (/*dispatch*/) => ({ /*pageActions: bindActionCreators(pageActions, dispatch)*/ });
export default connect(stateToProps, dispatchToProps)(HomePage);