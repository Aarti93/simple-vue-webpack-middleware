process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const path = require("path");
const express = require("express");
const proxy = require('express-http-proxy');
const config = require('./config/environment');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack_config = require('../webpack.config');
const compiler = webpack(webpack_config);

const DIST_DIR = path.join(__dirname, "..", "dist");

const PORT = 3000;
const app = express();

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpack_config.output.publicPath,
    stats: { colors: true }
}));
app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
}));
app.use(express.static(DIST_DIR));
//Serving the files in the dist folder
app.get('/', function (req, res) {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT);

console.log("Listening on port 3000")