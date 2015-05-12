var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var notify = require('gulp-notify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var babelify = require('babelify');
var browserSync = require('browser-sync');
var gutil = require('gulp-util');
var del = require('del');
// var envify = require('envify');
// var uglifyify = require('uglifyify');
// var uglify = require('gulp-uglify');

// Config options
var inJs = './src/js/main.js';
var outJs = 'main.js';
var outJsDir = './build/js';
var inHtml = './src/index.html';
var outDir = './build';

var production = process.env.NODE_ENV === 'production';

function handleError (task) {
  return function (err) {
    gutil.log(gutil.colors.red(err));
    notify.onError(task + ' failed, check the logs..')(err);
  };
}

gulp.task('clean', function (cb) {
  del(outDir);
  return cb();
});

function compile (watch) {
  var bundler = watchify(browserify({
    basedir: __dirname,
    debug: !production,
    entries: inJs,
    cache: {},
    packageCache: {},
    fullPaths: watch
  }).transform(babelify));

  function rebundle () {
    return bundler.bundle()
      .on('error', handleError('Browserify'))
      .pipe(source(outJs))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(outJsDir));
  }

  if (watch) {
    bundler.on('update', function () {
      rebundle().pipe(browserSync.reload({stream: true}));
      gutil.log('Rebundle...');
    });
  }

  rebundle();
}

// gulp.task('build', function() { return compile(); });
gulp.task('watchJS', function () { return compile(true); });

gulp.task('html', function () {
  return gulp.src(inHtml)
    .pipe(gulp.dest(outDir))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('watchHtml', function () {
  return gulp.watch(inHtml, ['html']);
});

gulp.task('browser-sync', ['html', 'watchHtml', 'watchJS'], function () {
  browserSync({ server: { baseDir: outDir } });
});

gulp.task('default', ['browser-sync']);
