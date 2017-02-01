import machine from './machine/index';

const modules = {
	machine
};

const keys = Object.keys(modules);

export const preloadedState = keys.reduce((map, key) => ({ ...map, [key]: modules[key].initialState }), {});

export const actions = keys.reduce((map, key) => ({ ...map, ...modules[key].actions }), {});

export const reducers = keys.reduce((map, key) => ({ ...map, [key]: modules[key].reducer }), {});

export default modules;