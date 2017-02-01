import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import { preloadedState, reducers } from 'modules/index';

const reducer = combineReducers(reducers);

const middleware = applyMiddleware(
	thunk,
	createLogger({
		collapsed: () => true,
		titleFormatter: ({ type }) => `${type[0]}${type.slice(1).split('_').join(' ').toLowerCase()}`
	})
);

export default createStore(reducer, preloadedState, middleware);