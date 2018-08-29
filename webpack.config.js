'use strict';
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '7890';

const BUILD_DIR = path.resolve(__dirname, './build');
const APP_DIR = path.resolve(__dirname, './src/client');

loaders.push({
	test: /\.scss$/,
	loaders: ['style-loader', 'css-loader?importLoaders=1', 'sass-loader'],
	exclude: ['node_modules']
});

module.exports = {
	entry: [
		'babel-polyfill',
		APP_DIR + '/index.js' // your app's entry point
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
	output: {
		publicPath: '/',
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		// Allow locating dependencies relative to the src directory and then the js directory.
		// no need for .. hell
		modules: [APP_DIR, APP_DIR + '/js', 'node_modules'],
		alias: {
			symbol: 'es6-symbol'
		}
	},
	module: {
		loaders
	},
	devServer: {
		contentBase: './public',
		// embed the webpack-dev-server runtime into the bundle
		inline: true,
		// serve index.html in place of 404 responses to allow HTML5 history
		historyApiFallback: true,
		port: PORT,
		host: HOST
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.NamedModulesPlugin(),
		new CopyWebpackPlugin([{ from: 'src/client/images', to: 'images' }]),
		new ExtractTextPlugin({
			filename: 'style.css',
			allChunks: true
		}),
		new DashboardPlugin(),
		new HtmlWebpackPlugin({
			template: './src/client/template.html',
			files: {
				css: ['style.css'],
				js: ['bundle.js']
			}
		})
	]
};
