import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import { rootRoute, indexRoute, routes } from 'app/bones/routes';

export default class AppRouter extends Component {
	render() {
		return <Router history={hashHistory}>
			<Route path='/' component={rootRoute}>
				<IndexRoute component={indexRoute}/>
				{
					Object.keys(routes).map((path, i) => (
						<Route path={path} name={path} component={routes[path]} key={i}/>
					))
				}
			</Route>
		</Router>;
	}
};