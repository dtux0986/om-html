module.exports = {
	entry: './js/index.js',
	output: {
		filename: './js/build/index.js'
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
	}
};