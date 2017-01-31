import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import modules from 'modules/index';
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

const allActions = Object.keys(modules).reduce((allActionsMap, name) => ({
	...allActionsMap,
	...modules[name].actions
}), {});
const mapStateToProps = state => ({ storeState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(allActions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(Home);