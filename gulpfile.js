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

gulp.task('styles', function() {
  return gulp.src('app/styles/**/*')
    .pipe(gulp.dest('dist/styles'));
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
  gulp.start('html', 'styles', 'scripts');
});

gulp.task('watch', ['build'], function() {
  gulp.watch('./app/scripts/**/*', ['build']);
  gulp.watch('./app/styles/**/*', ['styles']);
  gulp.watch('./app/*.html', ['html']);
});

gulp.task('default', ['watch']);



