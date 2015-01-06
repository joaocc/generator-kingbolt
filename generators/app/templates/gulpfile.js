var gulp = require('gulp');
var tsd = require('gulp-tsd'); //https://www.npmjs.com/package/gulp-tsd
var ts = require('gulp-typescript'); //https://www.npmjs.com/package/gulp-typescript/
//var tsc = require('gulp-tsc'); //Alternative approach to gulp-typescript https://www.npmjs.com/package/gulp-tsc
var eventStream = require('event-stream');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var karma = require('karma').server;
var browserSync = require('browser-sync');
//var changed = require('gulp-changed');
var newer = require('gulp-newer');

var reload = browserSync.reload;

var tsProject = ts.createProject({
    declarationFiles: true,
    noExternalResolve: true,
	sortOutput: true
});

var tsTests = ts.createProject({
    declarationFiles: false,
    noExternalResolve: false,
    sortOutput: true
});

/**
 * Get typescript-typings from github for external components listed in tsd.json
 */
gulp.task('tsd', function (callback) {
    tsd({
        command: 'reinstall',
        config: './tsd.json'
    }, callback);
});

/**
 * Compile sources once
 */
gulp.task('compile', function() {
    var tsResult = gulp.src(['src/**/*.ts', 'typings/**/*.ts'])
                       .pipe(newer('release/js/app.min.js'))
                       .pipe(ts(tsProject));

	return tsResult.js
                .pipe(concat('app.js')) // You can use other plugins that also support gulp-sourcemaps
                //.pipe(sourcemaps.write()) // Now the sourcemaps are added to the .js file
                .pipe(gulp.dest('release/js')) //here we write the normal output
				// This will minify and rename to foo.min.js
				//see: https://github.com/gulpjs/gulp/blob/master/docs/recipes/minified-and-non-minified.md
				.pipe(uglify())
				.pipe(rename({ extname: '.min.js' }))
				.pipe(gulp.dest('release/js'));
});


/**
 * Compile tests once
 */
gulp.task('compiletests', function() {
    var tsResult = gulp.src(['test/**/*.spec.ts'])
                       //.pipe(changed('release/test'))
                       .pipe(newer('release/test/tests.js'))
                       .pipe(ts(tsTests));

    return tsResult.js
                .pipe(concat('tests.js'))
                //.pipe(newer('release/test'))
                .pipe(gulp.dest('release/test')) //here we write the normal output

});


/**
 * Compile sources and tests once
 */
gulp.task('compileAll', ['compile','compiletests']);

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

/**
 * Run test once and exit
 */
gulp.task('watchTest', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  }, done);
});

/**
 * Watch for changed typescript-files and compile automatically to js-files
 */
gulp.task('watch', function() {
    gulp.watch('**/*.ts', ['compile','compiletests']);
});


// Watch Files For Changes & Reload
gulp.task('serve', function () {
	browserSync({
	notify: false,
	// Customize the BrowserSync console logging prefix
	logPrefix: 'BrowserSync',
	server: {baseDir: "./"}
	});

  	gulp.watch(['./*.html'], reload);
	gulp.watch(['./release/js/app.js'], reload);
});

gulp.task('watchServe', ['watch','serve']);

gulp.task('install', ['tsd','compileAll']);

gulp.task('default', ['watch','serve', 'watchTest']);
