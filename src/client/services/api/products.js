import productsMockData from 'mock-data/products';

const allProducts = Object.keys(productsMockData).map(name => ({
	name,
	forSale: 0,
	image: productsMockData[name],
	price: +(Math.random() * 3 + 1).toFixed(2),
	count: Math.max(1, Math.round(Math.random() * 15))
}));

export default {
	getAll() {
		return new Promise(resolve => {
			setTimeout(() => resolve(allProducts), 1.5);
		});
	},

	getForSale(products) {
		return products
			.filter(product => !!product.forSale)
			.map(product => ({
				name: product.name,
				image: product.image,
				price: product.price,
				count: product.forSale
			}));
	},

	getUnsold(products) {
		return products
			.filter(product => !!(product.count - product.forSale))
			.map(product => ({
				...product,
				count: product.count - product.forSale,
				forSale: 0
			}));
	},

	merge(aProducts, bProducts) {
		aProducts = aProducts.slice();
		bProducts = bProducts.slice();
		return aProducts
			.map(a => {
				bProducts.forEach((b, i) => {
					if (b.name === a.name) {
						a.count += b.count;
						bProducts.splice(i, 1);
						return false;
					}
				});
				return a;
			})
			.concat(bProducts);
	},

	calcSumm(products) {
		return products.reduce((summ, product) => {
			return +(summ + product.price * product.count).toFixed(2);
		}, 0);
	}
};