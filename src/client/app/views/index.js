import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'app/styles/index.less';

class AppLayout extends Component {
	render() {
		return <div id='app' className='app'>
			<div id='header' className='header'>
				<Link to='home' className='btn btn-primary'>Home</Link>
				<Link to='user' className='btn btn-default'>User</Link>
				<Link to='about' className='btn btn-default'>About</Link>
			</div>
			{this.props.children}
			<div id='footer' className='footer'>
				AppFooter
			</div>
		</div>;
	}
};

const stateToProps = state => state;
const dispatchToProps = (/*dispatch*/) => ({ /*pageActions: bindActionCreators(pageActions, dispatch)*/ });
export default connect(stateToProps, dispatchToProps)(AppLayout);