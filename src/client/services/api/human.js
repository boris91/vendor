export default {
	getSomeCash() {
		return new Promise(resolve => {
			setTimeout(() => resolve(+(Math.random() * 15 + 10).toFixed(2)), 1.5);
		});
	}
};