import { combineReducers } from 'redux';
import user from 'modules/user/reducer';
import page from 'modules/page/reducer';

export default initialState => {
	return combineReducers({
		user: user(initialState.user),
		page: page(initialState.page)
	});
};