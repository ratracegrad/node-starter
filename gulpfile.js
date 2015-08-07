(function() {
  'use strict';

  var gulp = require('gulp');
  var gutil = require('gulp-util');
  var plugins = require('gulp-load-plugins')();

  var sassRoot = 'assets/scss';
  var cssRoot = 'assets/css';

  function handleError(err) {
    console.log(err.toString());
  }

  gulp.task('build-sass', function() {
    return gulp.src(sassRoot+'/*.scss')
      .pipe(plugins.plumber())
      .pipe(plugins.notify('Compile Sass File: <%= file.relative %>...'))
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.autoprefixer('last 10 versions'))
      .pipe(plugins.sass({
        style: 'compressed'
      })).on('error', handleError)
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(cssRoot));
  });

  // #####################################################################
  // #####################################################################

  gulp.task('watch-sass', function() {
    plugins.notify('Sass Stream is Active...');
    gulp.watch(sassRoot+'/**/*.scss', ['build-sass']);
  });

  // #####################################################################
  // #####################################################################

  gulp.task('clean', ['clean:styles']);
  gulp.task('watch', ['watch-sass']);
  gulp.task('default', ['build-sass']);
})();
