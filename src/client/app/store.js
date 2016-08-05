import { createStore/*, applyMiddleware*/ } from 'redux';
import reducer from 'reducers/index';

export default function initStore(initialState) {
	const store = createStore(reducer, initialState);

	if (module.hot) {
		module.hot.accept('reducers/index', () => {
			const nextReducer = require('reducers/index');
			store.replaceReducer(nextReducer);
		});
	}

	return store;
};