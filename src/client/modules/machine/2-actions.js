import productsApi from 'services/api/products';

import types from './1-types';

export default {
	fillMachineWithProducts: () => async (dispatch) => {
		dispatch({
			type: types.FILL_MACHINE_WITH_PRODUCTS
		});

		try {
			const products = await productsApi.getAll();
			dispatch(fillMachineWithProductsOk(products));
		} catch (exc) {
			dispatch(fillMachineWithProductsFail());
		}
	},

	setProductForSale: (name, forSale) => dispatch => {
		dispatch({
			type: types.SET_PRODUCT_FOR_SALE,
			name,
			forSale
		});
	}
};

const fillMachineWithProductsOk = (products) => ({
	type: types.FILL_MACHINE_WITH_PRODUCTS_OK,
	products
});

const fillMachineWithProductsFail = () => ({
	type: types.FILL_MACHINE_WITH_PRODUCTS_FAIL
});