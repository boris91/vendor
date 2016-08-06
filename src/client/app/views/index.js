import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Greeting from 'modules/user/views/greeting';
import PhotosInfo from 'modules/page/views/photos-info';
import pageActions from 'modules/page/actions';

const stateToProps = state => state;

const dispatchToProps = dispatch => ({
	pageActions: bindActionCreators(pageActions, dispatch)
});

class App extends Component {
	render() {
		const props = this.props;

		return <div>
			<Greeting {...props.user}/>
			<PhotosInfo {...props.page} actions={props.pageActions}/>
		</div>;
	}
};

export default connect(stateToProps, dispatchToProps)(App);