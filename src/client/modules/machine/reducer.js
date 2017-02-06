import initialState from './initial-state';
import types from './types';

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

		case types.SET_PRODUCT_FOR_SALE:
			return {
				...state,
				products: state.products.map(product => product.name === action.name ? {
					...product,
					forSale: action.forSale
				} : product)
			};

		case types.EJECT_PURCHASING_MACHINE_PRODUCTS:
			return {
				...state,
				products: action.unsoldProducts
			};

		default:
			return state;
	}
};