process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const path = require("path");
const express = require("express");
const proxy = require('express-http-proxy');
const config = require('./config/environment');
const webpack = require('webpack');

const DIST_DIR = path.join(__dirname, "..", "dist");

const PORT = 3000;
const app = express();

app.use(express.static(DIST_DIR));
//Serving the files in the dist folder
app.get('/', function(req, res) {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT);

console.log("Listening on port 3000")