var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// 一次性编译 Sass 
gulp.task('sass', function() {
    return gulp.src('./source/scss/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./source/css'));
});
gulp.task('serviceWorker', function() {
    return gulp.src('./source/js/sw.js')
        .pipe(gulp.dest('./source'));
});

// 实时编译
gulp.task('default', ['sass', 'serviceWorker'], function() {
    gulp.watch('./source/scss/_partial/*.scss', ['sass']);
    gulp.watch('./source/scss/*.scss', ['sass']);
    gulp.watch('./source/js/*', ['serviceWorker']);
});