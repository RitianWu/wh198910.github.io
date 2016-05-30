var gulp = require('gulp'),
  sass = require('gulp-sass'),
  coffee = require('gulp-coffee'),
  jade = require('gulp-jade');

gulp.task('styles', function() {
  gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('scripts', function() {
  gulp.src('./src/coffee/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('templates', function() {
  gulp.src('./views/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./views'));
});

gulp.task('clean', function(cb) {
  del(['./dist'], cb)
});

gulp.task('default', ['clean'], function() {
  gulp.start('styles', 'scripts', 'templates');
});

gulp.task('watch', function() {
  gulp.watch('./src/sass/*.scss', ['styles']);
  gulp.watch('./src/coffee/*.coffee', ['scripts']);
  gulp.watch('./views/*.jade', ['templates']);
});
