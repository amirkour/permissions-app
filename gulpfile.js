
var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	fs = require('fs'),
	source = require('vinyl-source-stream'),
	browserify = require('browserify');

gulp.task('css', function () {
  return gulp.src('./src/styl/**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./public/compiled/css/'));
});

gulp.task('js', function(){

	browserify('./src/js/app.js')
		.transform("babelify") /*, {presets: ["es2015"]}) */
		.bundle()
		.pipe(source('app.bundle.js'))
		.pipe(gulp.dest('./public/compiled/js/'));
});

var js_task_list = 'js',
	styl_task_list = 'css',
	js_watcher   = gulp.watch('src/js/**/*.{js,jsx}', [js_task_list]),
	styl_watcher = gulp.watch('src/styl/**/*.styl', [styl_task_list]);

console.log("watching js files for changes ...");
js_watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running [' + js_task_list + '] tasks ...');
});

console.log("watching styl files for changes ...");
styl_watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running [' + styl_task_list + '] tasks ...');
});

gulp.task('default', ['css','js']);

/*
TODO
- dev vs prod
	- minify
	- sourcemaps
- compiling jade templates?
*/
