import createLogger from 'redux-logger';

export default createLogger();

/*
//custom logger implementation

const log = (typeof console === 'object' && typeof console.info === 'function') ? console.info.bind(console) : () => {};

export default store => next => action => {
	const prevState = store.getState();
	const nextAction = next(action);
	log({
		prevState,
		action,
		currState: store.getState()
	});
	return nextAction;
};
*/