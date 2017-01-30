import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import containers from 'containers/index';
import store from 'store';

ReactDom.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/' component={containers.Layout}>
				<IndexRoute component={containers.Home}/>
				{
					Object.keys(containers).map(path => (
						<Route path={path} name={path} component={containers[path]} key={path}/>
					))
				}
			</Route>
		</Router>
	</Provider>,
	document.querySelector('#root')
);