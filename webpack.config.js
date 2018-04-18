const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './js/index.js',
	output: {
		filename: './build/js/index.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		],
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			Popper: ['popper.js', 'default']
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
};