import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import modules from 'modules/index';
import './style.less';

class Layout extends React.Component {
	componentDidMount() {
		this.actions.fillMachineWithProducts();
	}

	render() {
		const { children } = this.props;
		return (
			<div>
				{children}
			</div>
		);
	}
};

const allActions = Object.keys(modules).reduce((acts, name) => {
	acts[name] = modules[name].actions;
	return acts;
}, {});
const mapStateToProps = state => ({ storeState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(allActions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(Layout);