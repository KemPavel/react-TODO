'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const babelify = require('babelify');
const del = require('del');


gulp.task('html', function() {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('scripts', function () {
  return browserify({entries: './app/scripts/app.js', debug: true})
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist/scripts/'));
});

gulp.task('build', ['clean'], function() {
  gulp.start('html', 'scripts');
});

gulp.task('watch', ['build'], function() {
  gulp.watch('./app/scripts/**/*', ['build']);
});

gulp.task('default', ['watch']);



