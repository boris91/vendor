import { createStore/*, applyMiddleware*/ } from 'redux';
import initialState from 'app/state';
import initReducer from 'app/reducer';

const reducer = initReducer(initialState);

export default function initStore() {
	const store = createStore(reducer, initialState);

	if (module.hot) {
		module.hot.accept('app/reducer', () => {
			const nextReducer = require('app/reducer').default;
			store.replaceReducer(nextReducer);
		});
	}

	return store;
};