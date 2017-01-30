import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import modules from 'modules/index';

const { reducers, preloadedState } = Object.keys(modules).reduce((data, moduleName) => {
	const module = modules[moduleName];
	data.reducers[moduleName] = module.reducer;
	data.preloadedState[moduleName] = module.initialState;
	return data;
}, { reducers: {}, preloadedState: {} });

const reducer = combineReducers(reducers);

const middleware = applyMiddleware(
	thunk,
	createLogger({
		collapsed: () => true,
		titleFormatter: ({ type }) => `${type[0]}${type.slice(1).split('_').join(' ').toLowerCase()}`
	})
);

export default createStore(reducer, preloadedState, middleware);