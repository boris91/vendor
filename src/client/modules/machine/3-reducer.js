import initialState from './0-initial-state';
import types from './1-types';

export default (state = initialState, action) => {
	switch (action.type) {
		case types.FILL_MACHINE_WITH_PRODUCTS:
			return {
				...state,
				pending: true,
				error: false
			};

		case types.FILL_MACHINE_WITH_PRODUCTS_OK:
			return {
				...state,
				pending: false,
				products: action.products
			};

		case types.FILL_MACHINE_WITH_PRODUCTS_FAIL:
			return {
				...state,
				pending: false,
				error: true,
				products: []
			};

		default:
			return state;
	}
};