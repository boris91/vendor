import Express from 'express';
import connectToDB from './db/index';
import config from '../../webpack.config';

export default (devMidware, hotMidware) => {
	const SERVER_OK_INFO = '==> Preparing... http://' + config.serverHost + ':' + config.serverPort + '/';
	const app = new Express();
	app
		.use(devMidware)
		.use(hotMidware)
		.get('/', (req, res) => res.sendFile(config.indexHtmlPath));

	connectToDB(app);

	app.listen(config.serverPort, error => error ? console.error(error) : console.info(SERVER_OK_INFO));
};