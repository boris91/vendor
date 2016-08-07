import { createStore, applyMiddleware } from 'redux';
import initialState from 'app/state';
import initReducer from 'app/reducer';
import enhancer from 'app/enhancer';
import thunk from 'redux-thunk';

const reducer = initReducer(initialState);

export default function initStore() {
	const store = createStore(reducer, initialState, applyMiddleware(thunk, enhancer));

	if (module.hot) {
		module.hot.accept('app/reducer', () => {
			const nextReducer = require('app/reducer').default;
			store.replaceReducer(nextReducer);
		});
	}

	return store;
};