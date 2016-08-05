import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import initStore from 'app/store';
import initialState from 'app/initial-state';
import App from 'app/view';

render(
	<Provider store={initStore(initialState)}>
		<App/>
	</Provider>,
	document.querySelector('#root')
);