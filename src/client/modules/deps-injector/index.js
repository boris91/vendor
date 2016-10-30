import injector from 'modules/deps-injector/injector';

export default (depcyInjectionConfig) => {
	const { nodeModules, funcs, services } = depcyInjectionConfig;
	injector.resolve(nodeModules, funcs, services);

	return injector;
};