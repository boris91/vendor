const entityApi = require('./entity-api');
const Logger = require('../../utils/logger');

/*create APIs for all entities and attach them to server*/
module.exports = (entities, db, server) => {
	const apis = {};

	entities.forEach(tableName => {
		const api = entityApi(db, tableName);

		Object.keys(api).forEach(method => {
			const routesByMethod = apis[method] || (apis[method] = {});
			const apiRoutes = api[method];

			Object.keys(apiRoutes).forEach(route => {
				if (routesByMethod[route]) {
					Logger.error(`API route "${route}" already exists!`);
				} else {
					routesByMethod[route] = apiRoutes[route];
					server[method](`/api/${route}`, apiRoutes[route]);
				}
			});
		});
	});
};