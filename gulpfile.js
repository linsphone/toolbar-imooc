var gulp = require('gulp'), //表示引进gulp模块
    watch = require('gulp-watch'),
    clean = require('gulp-clean'),
    // livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    // webserver = require('gulp-webserver'),
    sass = require('gulp-sass');
gulp.task('hello', function() {
    console.log('Hello sass');
});
gulp.task("clean", function() {
    return gulp.src("dist/")
        .pipe(clean());
});
gulp.task('sass', function() {
    //sass()方法用于转换sass到css
    //outputStyle 有 nested expanded compact compressed 。 开发用expanded 线上用compressed
    return gulp.src(['app/scss/**/toolbar-icon-after.scss','app/scss/**/toolbar.scss','app/scss/**/toolbar-icon.scss'])
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError)) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('dist/css'))
        // .pipe(livereload());
});
gulp.task('css', function() {
    gulp.src('dist/**/*')
        .pipe(connect.reload());
 
});

gulp.task('fonts',  function() {
  return gulp.src('app/fonts/*')
    .pipe(gulp.dest('dist/fonts'))
});
gulp.task('img',  function() {
  return gulp.src('app/**/*.png')
    .pipe(gulp.dest('dist'))
});

gulp.task('js',  function() {
  return gulp.src('app/**/*.js')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});
gulp.task('copyhtml', function() {
    gulp.src('app/**/*.html')
        .pipe(gulp.dest('./dist/'))
});
gulp.task('html', function() {
    gulp.src('./**/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', ['copyhtml','js','img','sass','fonts'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/js/**/*.js', ['js']);
    gulp.watch('app/**/*.html', ['copyhtml','html']);
    gulp.watch('./dist/**/*.css', ['css']);
});


//使用connect启动一个Web服务器
gulp.task('connect', function() {
    connect.server({
        root: './',
        livereload: true
    });
});


gulp.task('default', ['connect', 'watch']);
