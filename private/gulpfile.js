var gulp = require('gulp'),
    reactify = require('reactify'),
    browserify = require('gulp-browserify'),
    react = require('gulp-react'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass');

var ScssSrcPath = 'assets/scss/';
var JsxSrcPath = 'app';
var JsxEntryPoint = 'app/routes/routes.jsx';
var JsSrcPath = 'app/';
var ImgSrcPath = 'assets/img';

var ScssDestPath = '../public/assets/css/';
var JsxDestPath = '../public/app/';
var JsDestPath = '../public/app/';
var ImgDestPath = '../public/assets/img';

gulp.task('compile-scss', function () {
    return gulp.src(ScssSrcPath + '*.scss')
        .pipe(sass({style: 'expanded'}))
        .pipe(gulp.dest(ScssDestPath));
});

gulp.task('bundle-jsx', function () {
    return gulp.src(JsxEntryPoint)
        .pipe(browserify({
            debug: true,
            insertGlobals: true,
            transform: ['reactify'],
            extensions: ['.jsx'],
            paths: ['./app/']
        }))
        //.pipe(uglify())
        .pipe(rename('app.js'))
        .pipe(gulp.dest(JsxDestPath));
});

gulp.task('compile-jsx', function () {
    return gulp.src(JsxSrcPath + '**/*.jsx')
        .pipe(react())
        .pipe(rename({
            extname: '.js'
        }))
        .pipe(gulp.dest(JsxDestPath));
});

gulp.task('copy-js', function () {
    gulp.src(JsSrcPath + '**/*.js')
        .pipe(gulp.dest(JsDestPath));
});

gulp.task('copy-img', function () {
    gulp.src(ImgSrcPath + '/*')
        .pipe(gulp.dest(ImgDestPath));
});

gulp.task('observe', function () {
    gulp.watch(JsSrcPath + '**/*', ['bundle-jsx']);
    gulp.watch(ScssSrcPath + '**/*.scss', ['compile-scss']);
    gulp.watch(ImgSrcPath + '**/*', ['copy-img']);
});

gulp.task('observe-scss', function () {
    gulp.watch(ScssSrcPath + '**/*.scss', ['compile-scss']);
});

gulp.task('scss', ['compile-scss', 'observe-scss'], function () {

});

gulp.task('default', ['bundle-jsx', 'compile-scss', 'copy-img', 'observe'], function () {

});

/*gulp.task('default', ['compile-jsx', 'compile-scss', 'copy-js', 'copy-img', 'observe'], function () {

});*/