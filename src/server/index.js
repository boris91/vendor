import Webpack from 'webpack';
import DevMidware from 'webpack-dev-middleware';
import HotMidware from 'webpack-hot-middleware';
import config from '../../webpack.config';
import runExpressServer from './express';

const compiler = Webpack(config);
const devMidware = DevMidware(compiler, { noInfo: true, publicPath: config.output.publicPath });
const hotMidware = HotMidware(compiler);

runExpressServer(devMidware, hotMidware);