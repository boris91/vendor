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
	componentDidMount() {
		this.props.actions.fillMachineWithProducts();
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

export default connect(
	state => ({ storeState: state }),
	dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Home);