import React from 'react';

import { Product } from 'components/index';
import './style.less';

export default class VendingMachine extends React.Component {
	static defaultProps = {
		products: [],
		currencyFormatter: {format: value => value},
		onProductAct: (name, forSale) => ({name, forSale}),
		isPurchaseAllowed: false,
		onPurchaseClick: () => {}
	};

	constructor(props) {
		super(props);
		this.onPurchaseClick = this.onPurchaseClick.bind(this);
	}

	render() {
		const { products, currencyFormatter, onProductAct, isPurchaseAllowed } = this.props;

		return (
			<div className='vending-machine'>
				<div className='products'>
					{products.map(product => (
						<Product {...product}
							isPurchaseAllowed={isPurchaseAllowed}
							currencyFormatter={currencyFormatter}
							onAct={onProductAct}
							key={product.name}/>
					))}
				</div>
				<div className='btn purchase' disabled={!isPurchaseAllowed} onClick={this.onPurchaseClick}>Buy</div>
			</div>
		);
	}

	onPurchaseClick() {
		const { isPurchaseAllowed, onPurchaseClick } = this.props;
		if (isPurchaseAllowed) {
			onPurchaseClick();
		}
	}
};