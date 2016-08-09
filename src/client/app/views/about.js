import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'app/styles/about.less';

class AboutPage extends Component {
	render() {
		return <div id='about' class='about'>
			About page.
		</div>;
	}
};

const stateToProps = state => state;
const dispatchToProps = (/*dispatch*/) => ({ /*pageActions: bindActionCreators(pageActions, dispatch)*/ });
export default connect(stateToProps, dispatchToProps)(AboutPage);