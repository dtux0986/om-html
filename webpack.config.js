module.exports = {
	entry: './js/index.js',
	output: {
		filename: 'index2.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}]
	}
};