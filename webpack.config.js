var path = require('path');
var webpack = require('webpack');

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
		loaders: [{
			loaders: ['react-hot', 'babel-loader'],
			include: [path.resolve(__dirname, 'src/client')],
			test: /\.js$/,
			plugins: ['transform-runtime']
		}]
	},

	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],

	serverHost: 'localhost',
	serverPort: 9000,
	indexHtmlPath: path.join(__dirname, 'src/client/app/index.html')
};