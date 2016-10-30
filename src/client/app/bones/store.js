import initialState from 'app/bones/state';
import initReducer from 'app/bones/reducer';
import enhancer from 'app/bones/enhancer';

const initStore = () => {
	const Redux = initStore.hub.get('#Redux');
	const ReduxThunk = initStore.hub.get('#ReduxThunk');

	const reducer = initReducer(initialState);
	const store = Redux.createStore(reducer, initialState, Redux.applyMiddleware(ReduxThunk, enhancer));

	if (module.hot) {
		module.hot.accept('app/bones/reducer', () => {
			const nextReducer = require('app/bones/reducer').default;
			store.replaceReducer(nextReducer);
		});
	}

	return store;
};

export default initStore;