import Express from 'express';
import Webpack from 'webpack';
import DevMidware from 'webpack-dev-middleware';
import HotMidware from 'webpack-hot-middleware';
import config from '../../webpack.config';

const SERVER_OK_INFO = '==> Preparing... http://' + config.serverHost + ':' + config.serverPort + '/';

const compiler = Webpack(config);
const devMidware = DevMidware(compiler, { noInfo: true, publicPath: config.output.publicPath });
const hotMidware = HotMidware(compiler);

const app = new Express();
app
	.use(devMidware)
	.use(hotMidware)
	.get('/', (req, res) => res.sendFile(config.indexHtmlPath))
	.listen(config.serverPort, error => error ? console.error(error) : console.info(SERVER_OK_INFO));