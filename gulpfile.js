var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('build', function(){
  gulp.src('resources/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/public/css'));
  gulp.src('resources/scss/**/*.css')
    .pipe(gulp.dest('dist/public/css/'));
  gulp.src('resources/lib/*.js')
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/public/libs/js/'));
});

// Watch task
gulp.task('watch', function() {
  gulp.watch('resources/scss/**/*.scss', ['build']);
  gulp.watch('resources/lib/**/*.scss', ['build']);
});
