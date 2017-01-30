import React from 'react';

import './style.less';

export default class Product extends React.Component {
	static defaultProps = {
		name: '',
		image: '',
		price: 0,
		count: 0,
		currencyFormatter: { format: value => value },
		onAct: costDiff => costDiff
	};

	static propTypes = {
		name: React.PropTypes.string,
		image: React.PropTypes.string,
		price: React.PropTypes.number,
		count: React.PropTypes.number,
		currencyFormatter: React.PropTypes.shape({
			format: React.PropTypes.func
		}),
		onAct: React.PropTypes.func
	};

	constructor(props) {
		super(props);
		this.state = {
			forSale: 0
		};
		this.onDecClick = this.onForSaleClick.bind(this, -1);
		this.onIncClick = this.onForSaleClick.bind(this, 1);
	}

	render() {
		const { name, image, price, count, currencyFormatter } = this.props;
		const { forSale } = this.state;
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
		const { count, price, onAct } = this.props;
		const forSale = this.state.forSale + diff;

		if (0 <= forSale && forSale <= count) {
			this.setState({ forSale });
			onAct(price * diff);
		}
	}
};