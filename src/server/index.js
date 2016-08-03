var Express = require('express');
var Webpack = require('webpack');
var DevMidware = require('webpack-dev-middleware');
var HotMidware = require('webpack-hot-middleware');
var config = require('../../webpack.config');

var compiler = Webpack(config);
var devMidware = DevMidware(compiler, { noInfo: true, publicPath: config.output.publicPath });
var hotMidware = HotMidware(compiler);

var app = new Express();

app.use(devMidware);
app.use(hotMidware);

app.get('/', function(indexHtmlPath, req, res) {
	res.sendFile(indexHtmlPath);
}.bind(app, config.indexHtmlPath));

app.listen(config.serverPort, function(info, error) {
	error ? this.error(error) : this.info(info);
}.bind(console, '==> Listening... http://' + config.serverHost + ':' + config.serverPort + '/'));