import React, { Component } from 'react';
import { connect } from 'react-redux';
import Greeting from 'modules/user/views/greeting';
import PhotosInfo from 'modules/page/views/photos-info';

class Home extends Component {
	render() {
		return <div>
			<Greeting {...this.props.user}/>
			<PhotosInfo {...this.props.page}/>
		</div>;
	}
};

export default connect(state => state)(Home);