var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

loaders.push({
	test: /\.scss$/,
	loader: ExtractTextPlugin.extract({
		fallback: 'style-loader',
		use:
			'css-loader?sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?outputStyle=expanded'
	}),
	exclude: ['node_modules']
});

module.exports = {
	entry: [
		'babel-polyfill',
		'./src/index.js' // your app's entry point
	],
	output: {
		public: '/',
		path: path.join(__dirname, 'public'),
		filename: '[chunkhash].js'
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		//Allow locating dependancies relative to the src directory and then the js directory.
		// no need for .. hell
		modules: [
			path.join(__dirname, '/src'),
			path.join(__dirname, '/src/js'),
			'node_modules'
		],
		alias: {
			symbol: 'es6-symbol'
		}
	},
	module: {
		loaders
	},
	plugins: [
		new WebpackCleanupPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new UglifyJsPlugin({
			uglifyOptions: {
				ecma: 8,
				output: {
					comments: false,
					beautify: false
				},
				warnings: false
			}
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new CopyWebpackPlugin([{ from: 'src/images', to: 'images' }]),
		new ExtractTextPlugin({
			filename: 'style.css',
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			template: './src/template.html',
			files: {
				css: ['style.css'],
				js: ['bundle.js']
			}
		})
	]
};
