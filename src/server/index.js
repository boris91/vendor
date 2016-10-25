const Express = require('express');
const Webpack = require('webpack');
const DevMidware = require('webpack-dev-middleware');
const HotMidware = require('webpack-hot-middleware');
const logger = require('morgan');
const bodyParser = require('body-parser');
const connectToDB = require('./db/index');
const config = require('../../webpack.config');

const SERVER_OK_INFO = `==> Preparing "${process.env.NODE_ENV}"-env for http://${config.serverHost}:${config.serverPort}`;
const compiler = Webpack(config);
const devMidware = DevMidware(compiler, { noInfo: true, publicPath: config.output.publicPath });
const hotMidware = HotMidware(compiler);
const app = new Express();

app
	.use(devMidware)
	.use(hotMidware);

if (process.env.NODE_ENV === 'dev') {
	app.use(logger('dev'));
}

app
	.use(bodyParser.urlencoded({ extended: true }))
	.use(bodyParser.json())
	.get('/', (req, res) => res.sendFile(config.indexHtmlPath))
	.listen(config.serverPort, error => error ? console.error(error) : console.info(SERVER_OK_INFO));

connectToDB(app);