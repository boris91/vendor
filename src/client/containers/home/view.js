import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from 'modules/index';
import { Human, VendingMachine } from 'components/index';
import './style.less';

const currencyFormatter = new window.Intl.NumberFormat('en', {
	style: 'currency',
	currency: 'GBP'
});

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.onMachineProductAct = this.onMachineProductAct.bind(this);
		this.onMachinePurchaseClick = this.onMachinePurchaseClick.bind(this);
	}

	componentDidMount() {
		this.fillMachineWithProducts();
		this.giveHumanSomeCash();
	}

	render() {
		const { machine, human } = this.props.storeState;
		const humanFreeCash = this.getHumanFreeCash();
		const fullPrice = this.getFullPrice();

		return (
			<div className='home'>
				<VendingMachine {...machine}
					humanFreeCash={humanFreeCash}
					fullPrice={fullPrice}
					isPurchaseAllowed={0 < fullPrice}
					currencyFormatter={currencyFormatter}
					onProductAct={this.onMachineProductAct}
					onPurchaseClick={this.onMachinePurchaseClick}
				/>
				<Human {...human} currencyFormatter={currencyFormatter}/>
			</div>
		);
	}

	onMachineProductAct(name, forSale) {
		this.setProductForSale(name, forSale);
	}

	onMachinePurchaseClick() {
		const { machine: { products } } = this.props.storeState;
		this.ejectPurchasingMachineProducts();
		this.purchaseProducts(products);
	}
};

export default connect(
	state => ({ storeState: state }),
	dispatch => {
		Object.assign(Home.prototype, bindActionCreators(actions, dispatch));
		return {};
	}
)(Home);