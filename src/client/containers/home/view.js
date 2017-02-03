import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from 'modules/index';
import { VendingMachine } from 'components/index';
import './style.less';

const currencyFormatter = new window.Intl.NumberFormat('en', {
	style: 'currency',
	currency: 'GBP'
});

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.onMachineProductAct = this.onMachineProductAct.bind(this);
	}

	componentDidMount() {
		this.fillMachineWithProducts();
	}

	render() {
		const { machine } = this.props.storeState;
		return (
			<div className='home'>
				<VendingMachine {...machine} currencyFormatter={currencyFormatter} onProductAct={this.onMachineProductAct}/>
			</div>
		);
	}

	onMachineProductAct(name, forSale) {
		this.setProductForSale(name, forSale);
	}
};

export default connect(
	state => ({ storeState: state }),
	dispatch => {
		Object.assign(Home.prototype, bindActionCreators(actions, dispatch));
		return {};
	}
)(Home);