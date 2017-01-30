import React from 'react';

import { VendingMachine } from 'components/index';
import './style.less';

const currencyFormatter = new window.Intl.NumberFormat('en', {
	style: 'currency',
	currency: 'GBP'
});

export default class Home extends React.Component {
	componentDidMount() {
		this.actions.fillMachineWithProducts();
	}

	render() {
		const { machine } = this.props.storeState;
		return (
			<div className='home'>
				<VendingMachine {...machine} currencyFormatter={currencyFormatter}/>
			</div>
		);
	}
};