import Express from 'express';
import routes from './routes';
import config from '../../webpack.config';

export default (devMidware, hotMidware) => {
	const SERVER_OK_INFO = '==> Preparing... http://' + config.serverHost + ':' + config.serverPort + '/';
	const app = new Express();
	app
		.use(devMidware)
		.use(hotMidware)
		.get('/', (req, res) => res.sendFile(config.indexHtmlPath));

	for (let method in routes) {
		let routesByMethod = routes[method];
		for (let path in routesByMethod) {
			app[method](path, routesByMethod[path]);
		}
	}

	app.listen(config.serverPort, error => error ? console.error(error) : console.info(SERVER_OK_INFO));
};