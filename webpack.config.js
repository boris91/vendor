const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

const occurOrderPlugin = new webpack.optimize.OccurenceOrderPlugin();
const hmrPlugin = new webpack.HotModuleReplacementPlugin();

const JS_RE = /\.js$/;
const LESS_RE = /\.less$/;
const IMG_FONTS_RE = /\.(png|woff|woff2|eot|ttf|svg)$/;
const CLIENT_PATH = [path.resolve(__dirname, 'src/client')];

module.exports = {
	devtool: 'cheap-module-eval-source-map',

	resolve: {
		root: CLIENT_PATH,
		extension: ['', '.js'],
		modulesDirectories: ['node_modules']
	},

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
			include: CLIENT_PATH
		}],
		loaders: [{
			test: JS_RE,
			loaders: ['react-hot', 'babel-loader'],
			include: CLIENT_PATH,
			plugins: ['transform-runtime']
		}, {
			test: LESS_RE,
			loader: 'style!css!less!postcss',
			include: CLIENT_PATH
		}, {
			test: /\.css$/,
			loader: 'style!css!postcss',
			include: CLIENT_PATH
		}, {
			test: IMG_FONTS_RE,
			loader: 'url-loader?limit=100000',
			include: CLIENT_PATH
		}]
	},

	postcss: () => [autoprefixer],

	plugins: [occurOrderPlugin, hmrPlugin],

	serverHost: 'localhost',
	serverPort: 9000,
	indexHtmlPath: path.join(__dirname, 'src/client/app/index.html')
};