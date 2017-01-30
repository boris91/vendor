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
	}
};

const fillMachineWithProductsOk = (products) => ({
	type: types.FILL_MACHINE_WITH_PRODUCTS_OK,
	products
});

const fillMachineWithProductsFail = () => ({
	type: types.FILL_MACHINE_WITH_PRODUCTS_FAIL
});