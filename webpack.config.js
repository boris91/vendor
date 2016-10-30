const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const JS_RE = /\.js$/;
const CSS_RE = /\.css$/;
const HTML_RE = /\.html$/;
const LESS_RE = /\.less$/;
const IMG_FONTS_RE = /\.(png|woff|woff2|eot|ttf|svg)$/;
const CLIENT_PATH = [path.resolve(__dirname, 'src/client')];

const entry = [
	'babel-polyfill',
	'./src/client/index'
];
const preLoaders = [];
const plugins = [
	new webpack.optimize.DedupePlugin(),
	new webpack.optimize.OccurenceOrderPlugin(),
	new HtmlWebpackPlugin({ template: 'src/client/index.html', inject: false })
];
let devtool;

switch (process.env.NODE_ENV) {
	case 'development':
		devtool = 'cheap-module-eval-source-map';
		entry.unshift('webpack-hot-middleware/client');
		preLoaders.push({
			test: JS_RE,
			loader: 'eslint',
			include: CLIENT_PATH
		});
		plugins.push(new webpack.HotModuleReplacementPlugin());
		break;
	case 'production':
		devtool = 'cheap-source-map';
		plugins.push(new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }));
		plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }));
		break;
}

module.exports = {
	devtool,

	resolve: {
		root: CLIENT_PATH,
		extension: ['', '.js'],
		modulesDirectories: ['node_modules']
	},

	entry,

	output: {
		path: path.join(__dirname, 'dst'),
		filename: 'index.js',
		publicPath: '/'
	},

	module: {
		preLoaders,

		loaders: [{
			test: JS_RE,
			loaders: ['react-hot', 'babel-loader'],
			include: CLIENT_PATH,
			plugins: ['transform-runtime']
		}, {
			test: HTML_RE,
			loader: 'html'
		}, {
			test: LESS_RE,
			loader: 'style!css!less!postcss',
			include: CLIENT_PATH
		}, {
			test: CSS_RE,
			loader: 'style!css!postcss',
			include: CLIENT_PATH
		}, {
			test: IMG_FONTS_RE,
			loader: 'url-loader?limit=100000',
			include: CLIENT_PATH
		}]
	},

	postcss: () => [autoprefixer],

	plugins,

	serverHost: 'localhost',
	serverPort: 9000,
	indexHtmlPath: 'index.html'
};