import initialState from './initial-state';
import types from './types';

export default (state = initialState, action) => {
	switch (action.type) {
		case types.GIVE_HUMAN_SOME_CASH:
			return {
				...state
			};

		case types.GIVE_HUMAN_SOME_CASH_OK:
			return {
				...state,
				cash: action.cash
			};

		case types.GIVE_HUMAN_SOME_CASH_FAIL:
			return {
				...state
			};

		case types.PURCHASE_PRODUCTS:
			return {
				...state,
				purchasedProducts: action.products,
				cash: action.cash
			};

		default:
			return state;
	}
};