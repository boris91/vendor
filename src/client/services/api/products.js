import productsMockData from 'mock-data/products';

const allProducts = Object.keys(productsMockData).map(name => ({
	name,
	image: productsMockData[name],
	price: +(Math.random() * 3 + 1).toFixed(2),
	count: Math.max(1, Math.round(Math.random() * 15))
}));

export default {
	getAll() {
		return new window.Promise(resolve => {
			setTimeout(() => resolve(allProducts), 1.5);
		});
	}
};