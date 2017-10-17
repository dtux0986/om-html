module.exports = {
	entry: './js/scripts.js',
	output: {
		path: './js/build',
		filename: 'scripts.js'
	}
};

module.exports = {
	entry: './js/scripts.js',
	output: {
		path: './js/build',
		filename: 'scripts.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}]
	}
};