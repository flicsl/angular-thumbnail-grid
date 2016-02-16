var gulp = require('gulp');
var watch =  require('gulp-watch');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('sass', function () {
	return gulp.src('src/**/*.scss')
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(gulp.dest("dist/"));
});

gulp.task('jade', function () {
	return gulp.src('src/**/*.jade')
	.pipe(jade({pretty: true}))
	.pipe(gulp.dest("dist/"));
});

gulp.task('js', function () {
	return gulp.src('src/**/*.js')
	.pipe(ngAnnotate())
	.pipe(gulp.dest("dist/"));
});

gulp.task('build', ['sass', 'jade', 'js']);

gulp.task('watch', function () {
	watch('src/**/*.scss', function () {
		gulp.start('sass');
	});

	watch('src/**/*.jade', function () {
		gulp.start('jade');
	});

	watch('src/**/*.js', function () {
		gulp.start('js');
	});
});

gulp.task('default', ['build', 'watch']);