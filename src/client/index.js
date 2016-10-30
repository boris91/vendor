import config from 'config';
import injectDeps from 'modules/deps-injector/index';

const hub = injectDeps(config.depcyInjection);

const React = hub.get('#React');
const ReactDom = hub.get('#ReactDom');
const ReactRedux = hub.get('#ReactRedux');
const initStore = hub.get('initStore');
const AppRouter = hub.get('AppRouter');
const document = hub.get('document');

ReactDom.render(
	<ReactRedux.Provider store={initStore()}>
		<AppRouter/>
	</ReactRedux.Provider>,
	document.querySelector('#root')
);