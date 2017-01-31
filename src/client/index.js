import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import { Home } from 'containers/index';
import store from 'store';

ReactDom.render(
	<Provider store={store}>
		<Home/>
	</Provider>,
	document.querySelector('#root')
);