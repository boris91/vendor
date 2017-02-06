import React from 'react';

import { Product } from 'components/index';
import './style.less';

export default class Human extends React.Component {
	static defaultProps = {
		currencyFormatter: {format: value => value},
		purchasedProducts: [],
		cash: 0
	};

	render() {
		const { purchasedProducts, currencyFormatter, cash } = this.props;

		return (
			<div className='human'>
				<div className='cash'>Cash: {cash}</div>
				<div className='purchased-products'>
					{purchasedProducts.map(product => (
						<Product {...product} currencyFormatter={currencyFormatter} key={product.name}/>
					))}
				</div>
			</div>
		);
	}
};