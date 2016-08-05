import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import initStore from 'app/store';
import App from 'app/view';

render(
	<Provider store={initStore()}>
		<App/>
	</Provider>,
	document.querySelector('#root')
);