import React from 'react';

import './style.less';

export default class Product extends React.Component {
	static defaultProps = {
		name: '',
		image: '',
		price: 0,
		count: 0,
		currencyFormatter: { format: value => value },
		onAct: (name, forSale) => ({ name, forSale })
	};

	constructor(props) {
		super(props);
		this.onDecClick = this.onForSaleClick.bind(this, -1);
		this.onIncClick = this.onForSaleClick.bind(this, 1);
	}

	render() {
		const { name, image, price, count, forSale, currencyFormatter } = this.props;
		const stock = count - forSale;
		const decBtnDisabled = 0 === forSale;
		const incBtnDisabled = forSale === count;

		return (
			<div className='product'>
				<img className='image' src={image}/>
				<div className='name'>{name}</div>
				<div className='price'>{currencyFormatter.format(price)}</div>
				<div className='stock'>{stock}</div>
				<div className='for-sale'>
					<div className='btn dec' disabled={decBtnDisabled} onClick={this.onDecClick}>-</div>
					<div className='count'>{forSale}</div>
					<div className='btn inc' disabled={incBtnDisabled} onClick={this.onIncClick}>+</div>
				</div>
			</div>
		);
	}

	onForSaleClick(diff) {
		const { name, count, forSale, onAct } = this.props;
		const nextForSale = forSale + diff;

		if (0 <= nextForSale && nextForSale <= count) {
			onAct(name, nextForSale);
		}
	}
};