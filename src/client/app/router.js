import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import AppLayout from 'app/views/index';
import HomePage from 'app/views/home';
import UserPage from 'app/views/user';
import AboutPage from 'app/views/about';

export default class AppRouter extends Component {
	render() {
		return <Router history={hashHistory}>
			<Route path='/' component={AppLayout}>
				<IndexRoute component={HomePage}/>
				<Route path='home' name='home' component={HomePage}/>
				<Route path='user' name='user' component={UserPage}/>
				<Route path='about' name='about' component={AboutPage}/>
			</Route>
		</Router>;
	}
};