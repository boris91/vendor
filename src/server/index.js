const Express = require('express');
const Webpack = require('webpack');
const DevMidware = require('webpack-dev-middleware');
const HotMidware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');
const Logger = require('./utils/logger');
const connectToDB = require('./db/index');
const config = require('../../webpack.config');

const runServer = () => {
	const compiler = Webpack(config);
	const devMidware = DevMidware(compiler, {noInfo: true, publicPath: config.output.publicPath});
	const hotMidware = HotMidware(compiler);
	const app = new Express();

	app
		.use(devMidware)
		.use(hotMidware)
		.use(bodyParser.urlencoded({extended: true}))
		.use(bodyParser.json())
		.get('/', (req, res) => res.sendFile(config.indexHtmlPath))
		.listen(config.serverPort, error => {
			if (error) {
				Logger.error(error);
			} else {
				Logger
					.pipe(process.env.NODE_ENV, 'cyan')
					.pipe('-server is listening on ')
					.pipe(`http://${config.serverHost}:${config.serverPort}`, 'cyan')
					.print(true);
			}
		});

	return app;
};

connectToDB(runServer);