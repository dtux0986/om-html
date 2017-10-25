var gulp = require('gulp'),
		sass = require('gulp-sass'),
		webpack = require("webpack-stream"),
		watch = require('gulp-watch'),
		livereload = require('gulp-livereload');

gulp.task('sass', function () {
	return gulp.src(['scss/styles.scss'])
			.pipe(sass())
			.pipe(gulp.dest(''))
			.pipe(livereload());
});

gulp.task('webpack-stream', function() {
	return gulp.src('js/index.js')
			.pipe(webpack(require('./webpack.config.js')))
			.pipe(gulp.dest(''))
			.pipe(livereload());
});

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch('**/*.css', livereload.reload);
	gulp.watch(['scss/*.scss', 'scss/*/*.scss'], ['sass'],livereload.reload);
	gulp.watch(['images/*', 'images/*/*'], livereload.reload);
	gulp.watch(['js/*.js', 'js/*/*.js'], ['webpack-stream'], livereload.reload);
	gulp.watch('**/*.html', livereload.reload);
});

gulp.task('default', ['sass', 'webpack-stream', 'watch']);
