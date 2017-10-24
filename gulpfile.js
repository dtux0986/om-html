var gulp = require('gulp'),
		sass = require('gulp-sass'),
		livereload = require('gulp-livereload'),
		watch = require('gulp-watch'),
		babel = require("gulp-babel");

gulp.task('sass', function () {
	return gulp.src(['scss/styles.scss'])
			.pipe(sass())
			.pipe(gulp.dest(''))
			.pipe(livereload());
});

gulp.task("babel", function () {
	return gulp.src("js/index.js")
			.pipe(babel())
			.pipe(gulp.dest("js/build"))
			.pipe(livereload());
});

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch('**/*.css', livereload.reload);
	gulp.watch(['scss/*.scss', 'scss/*/*.scss'], ['sass'],livereload.reload);
	gulp.watch(['images/*', 'images/*/*'], livereload.reload);
	gulp.watch(['js/*.js', 'js/*/*.js'], livereload.reload);
	gulp.watch('**/*.html', livereload.reload);
});

gulp.task('default', ['sass', 'babel','watch']);
