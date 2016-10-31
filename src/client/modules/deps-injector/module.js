const ModuleType = {
	FUNC: 'ModuleType.FUNC',
	SERVICE: 'ModuleType.SERVICE',
	NODE_MODULE: 'ModuleType.NODE_MODULE'
};

const ModuleNamePrefix = {
	[ModuleType.FUNC]: '',
	[ModuleType.SERVICE]: '@',
	[ModuleType.NODE_MODULE]: '#'
};

const injector = {
	resolve(diConfig) {
		this._hub = {};
		this._pending = {};
		this._registerModules(ModuleType.NODE_MODULE, diConfig.nodeModules)
			._registerModules(ModuleType.FUNC, diConfig.funcs)
			._registerModules(ModuleType.SERVICE, diConfig.services)
			._initPendingModules();
	},

	get(id) {
		this._initModuleIfPending(id);
		if (this._hub[id]) {
			return this._hub[id];
		} else {
			throw `No "${id}" module is registered in app container.`;
		}
	},

	_registerModules(type, modules) {
		Object.keys(modules).forEach(name => this._registerModule(type, name, modules[name]));
		return this;
	},

	_registerModule(type, name, module) {
		const id = ModuleNamePrefix[type] + name;
		if (this._hub[id]) {
			throw `"${id}" already registered in app container.`;
		} else {
			if (type !== ModuleType.NODE_MODULE) {
				Object.defineProperty(module, 'hub', { value: this });
			}
			if (type === ModuleType.SERVICE) {
				this._pending[id] = module;
			} else {
				this._hub[id] = module;
			}
		}
	},

	_initModuleIfPending(id) {
		if (this._pending[id]) {
			this._initPendingModule(id);
		}
	},

	_initPendingModule(id) {
		this._hub[id] = new this._pending[id]();
		delete this._pending[id];
	},

	_initPendingModules() {
		Object.keys(this._pending).forEach(this._initPendingModule, this);
	}
};

module.exports = injector;