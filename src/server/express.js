import Express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import connectToDB from './db/index';
import config from '../../webpack.config';

export default (devMidware, hotMidware) => {
	const SERVER_OK_INFO = '==> Preparing... http://' + config.serverHost + ':' + config.serverPort + '/';
	const app = new Express();
	app
		.use(devMidware)
		.use(hotMidware)
		.use(logger('dev'))
		.use(bodyParser.urlencoded({ extended: true }))
		.use(bodyParser.json())
		.get('/', (req, res) => res.sendFile(config.indexHtmlPath))
		.listen(config.serverPort, error => error ? console.error(error) : console.info(SERVER_OK_INFO));

	connectToDB(app);
};