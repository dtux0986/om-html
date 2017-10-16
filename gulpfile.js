var gulp = require('gulp'),
		less = require('gulp-less'),
		jshint = require('gulp-jshint'),
		livereload = require('gulp-livereload'),
		watch = require('gulp-watch');

// Compile all LESS Style

gulp.task('style', function () {
	gulp.src(['less/style.less'])
			.pipe(less())
			.pipe(gulp.dest(''))
			.pipe(livereload());
});

// Compile RTL LESS

gulp.task('rtl', function () {
	gulp.src(['less/rtl.less'])
			.pipe(less())
			.pipe(gulp.dest(''));
});

// Track JS Bugs

gulp.task('lint', function () {
	return gulp.src('js/*.js')
			.pipe(jshint())
			.pipe(jshint.reporter('default'));
});

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch('*.css', livereload.reload);
	gulp.watch('less/*.less', livereload.reload);
	gulp.watch(['images/*', 'images/*/*'], livereload.reload);
	gulp.watch('js/*.js', livereload.reload);
	gulp.watch('**/*.php', livereload.reload);
	gulp.watch('**/*.html', livereload.reload);
});

// Run all tasks

gulp.task('default', ['style', 'rtl', 'lint', 'watch']);
