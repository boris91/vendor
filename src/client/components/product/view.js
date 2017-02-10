import React from 'react';

import './style.less';

export default class Product extends React.Component {
	static defaultProps = {
		name: '',
		image: '',
		price: 0,
		count: 0,
		forSale: 0,
		notForSale: false,
		isPurchasable: false,
		currencyFormatter: { format: value => value },
		onAct: (name, forSale) => ({ name, forSale })
	};

	constructor(props) {
		super(props);
		this.btnRefs = {};
		this.onDecRef = this.onBtnRef.bind(this, -1);
		this.onIncRef = this.onBtnRef.bind(this, 1);
		this.onDecClick = this.onForSaleClick.bind(this, -1);
		this.onIncClick = this.onForSaleClick.bind(this, 1);
	}

	render() {
		const { name, image, price, count, notForSale, forSale, isPurchasable, currencyFormatter } = this.props;
		const stock = count - forSale;
		const decBtnDisabled = 0 === forSale;
		const incBtnDisabled = forSale === count || !isPurchasable;

		return (
			<div className='product'>
				<img className='image' src={image}/>
				<div className='name'>{name}</div>
				{
					notForSale ? null : (
						<div className='price'>{currencyFormatter.format(price)}</div>
					)
				}
				<div className='stock'>{stock}</div>
				{
					notForSale ? null : (
						<div className='for-sale'>
							<div className='btn dec' ref={this.onDecRef} disabled={decBtnDisabled} onClick={this.onDecClick}>-</div>
							<div className='count'>{forSale}</div>
							<div className='btn inc' ref={this.onIncRef} disabled={incBtnDisabled} onClick={this.onIncClick}>+</div>
						</div>
					)
				}
			</div>
		);
	}

	onBtnRef(diff, ref) {
		this.btnRefs[diff] = ref;
	}

	onForSaleClick(diff) {
		if (null === this.btnRefs[diff].getAttribute('disabled')) {
			const { name, count, forSale, onAct } = this.props;
			const nextForSale = forSale + diff;

			if (0 <= nextForSale && nextForSale <= count) {
				onAct(name, nextForSale);
			}
		}
	}
};