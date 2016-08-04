import path from 'path';
import webpack from 'webpack';

const occurOrderPlugin = new webpack.optimize.OccurenceOrderPlugin();
const hmrPlugin = new webpack.HotModuleReplacementPlugin();

const JS_RE = /\.js$/;
const CLIENT_PATH = path.resolve(__dirname, 'src/client');

export default {
	devtool: 'cheap-module-eval-source-map',

	entry: [
		'webpack-hot-middleware/client',
		'babel-polyfill',
		'./src/client/app/index'
	],

	output: {
		path: path.join(__dirname, 'dst'),
		filename: 'bundle.js',
		publicPath: '/'
	},

	module: {
		preLoaders: [{
			test: JS_RE,
			loaders: ['eslint'],
			include: [CLIENT_PATH]
		}],
		loaders: [{
			test: JS_RE,
			loaders: ['react-hot', 'babel-loader'],
			include: [CLIENT_PATH],
			plugins: ['transform-runtime']
		}]
	},

	plugins: [occurOrderPlugin, hmrPlugin],

	serverHost: 'localhost',
	serverPort: 9000,
	indexHtmlPath: path.join(__dirname, 'src/client/app/index.html')
};