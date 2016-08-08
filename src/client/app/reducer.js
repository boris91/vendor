import { combineReducers } from 'redux';

export default (/*initialState*/) => {
	return combineReducers({
		anyReducer: ((initialState) => {
			return (state = initialState/*, { type, payload }*/) => state;
		})(null)
	});
};