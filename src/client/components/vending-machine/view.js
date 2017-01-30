import React from 'react';

import { Product } from 'components/index';
import './style.less';

export default class VendingMachine extends React.Component {
	static defaultProps = {
		products: [],
		currencyFormatter: { format: value => value },
	};

	static propTypes = {
		products: React.PropTypes.array,
		currencyFormatter: React.PropTypes.shape({
			format: React.PropTypes.func
		})
	};

	constructor(props) {
		super(props);
		this.state = {
			fullCost: 0
		};
		this.onProductAct = this.onProductAct.bind(this);
	}

	render() {
		const { products, currencyFormatter } = this.props;
		const { fullCost } = this.state;

		return (
			<div className='vending-machine'>
				<div className='products'>
					{products.map(product => <Product {...product} currencyFormatter={currencyFormatter} onAct={this.onProductAct} key={product.name}/>)}
				</div>
				<div className='full-cost'>Full cost: {currencyFormatter.format(fullCost)}</div>
			</div>
		);
	}

	onProductAct(costDiff) {
		const { fullCost } = this.state;
		this.setState({
			fullCost: +(fullCost + costDiff).toFixed(2)
		});
	}
};