import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import initStore from 'app/store';
import AppRouter from 'app/router';

render(
	<Provider store={initStore()}>
		<AppRouter/>
	</Provider>,
	document.querySelector('#root')
);