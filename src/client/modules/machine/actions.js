import productsApi from 'services/api/products';

import types from './types';

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
	},

	getFullPrice: () => (dispatch, getState) => {
		const { machine: { products } } = getState();
		const productsForSale = productsApi.getForSale(products);
		return productsApi.calcSumm(productsForSale);
	},

	getHumanFreeCash: () => (dispatch, getState) => {
		const { human: { cash }, machine: { products } } = getState();
		const productsForSale = productsApi.getForSale(products);
		const fullPrice = productsApi.calcSumm(productsForSale);
		return cash - fullPrice;
	},

	ejectPurchasingMachineProducts: () => (dispatch, getState) => {
		const { machine: { products } } = getState();
		const unsoldProducts = productsApi.getUnsold(products);
		dispatch({
			type: types.EJECT_PURCHASING_MACHINE_PRODUCTS,
			unsoldProducts
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