import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import initialState from 'app/bones/state';
import initReducer from 'app/bones/reducer';
import enhancer from 'app/bones/enhancer';

const reducer = initReducer(initialState);

export default function initStore() {
	const store = createStore(reducer, initialState, applyMiddleware(thunk, enhancer));

	if (module.hot) {
		module.hot.accept('app/bones/reducer', () => {
			const nextReducer = require('app/bones/reducer').default;
			store.replaceReducer(nextReducer);
		});
	}

	return store;
};