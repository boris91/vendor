import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Greeting from 'modules/user/views/greeting';
import PhotosInfo from 'modules/page/views/photos-info';
import pageActions from 'modules/page/actions';
import 'app/styles.less';

const stateToProps = state => ({
	...state,
	page: {
		...state.page,
		year: state.page.year || +Object.keys(state.page.photos)[0]
	}
});

const dispatchToProps = dispatch => ({
	pageActions: bindActionCreators(pageActions, dispatch)
});

class App extends Component {
	render() {
		const props = this.props;

		return <div id='app' className='app'>
			<Greeting {...props.user}/>
			<PhotosInfo {...props.page} actions={props.pageActions}/>
		</div>;
	}
};

export default connect(stateToProps, dispatchToProps)(App);