import humanApi from 'services/api/human';
import productsApi from 'services/api/products';

import types from './types';

export default {
	giveHumanSomeCash: () => async (dispatch) => {
		dispatch({
			type: types.GIVE_HUMAN_SOME_CASH
		});

		try {
			const cash = await humanApi.getSomeCash();
			dispatch(giveHumanSomeCashOk(cash));
		} catch (exc) {
			dispatch(giveHumanSomeCashFail());
		}
	},

	purchaseProducts: allProducts => (dispatch, getState) => {
		const { cash, purchasedProducts } = getState().human;
		const productsForSale = productsApi.getForSale(allProducts);
		const products = productsApi.merge(purchasedProducts, productsForSale);
		dispatch({
			type: types.PURCHASE_PRODUCTS,
			products,
			cash: +(cash - productsApi.calcSumm(productsForSale)).toFixed(2)
		});
	}
};

const giveHumanSomeCashOk = cash => ({
	type: types.GIVE_HUMAN_SOME_CASH_OK,
	cash
});

const giveHumanSomeCashFail = () => ({
	type: types.GIVE_HUMAN_SOME_CASH_FAIL
});