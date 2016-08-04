var path = require('path');
var webpack = require('webpack');
var occurOrderPlugin = new webpack.optimize.OccurenceOrderPlugin();
var hmrPlugin = new webpack.HotModuleReplacementPlugin();

var JS_RE = /\.js$/;
var CLIENT_PATH = path.resolve(__dirname, 'src/client');

module.exports = {
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