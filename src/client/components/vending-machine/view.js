import React from 'react';

import { Product } from 'components/index';
import './style.less';

export default class VendingMachine extends React.Component {
	static defaultProps = {
		products: [],
		currencyFormatter: {format: value => value},
		onProductAct: (name, forSale) => ({name, forSale})
	};

	render() {
		const { products, currencyFormatter, onProductAct } = this.props;

		return (
			<div className='vending-machine'>
				<div className='products'>
					{products.map(product => <Product {...product} currencyFormatter={currencyFormatter} onAct={onProductAct} key={product.name}/>)}
				</div>
			</div>
		);
	}
};