const gulp = require('gulp');
const sass = require('sass');
const gulpSass = require('gulp-sass');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const scssCompiler = gulpSass(sass);

gulp.task('js', () => {
    var b = browserify({
        entries: './src/index.js',
    });

    return b
        .transform("babelify", {presets: ["@babel/preset-env"]})
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./dest/js'));
})

gulp.task('styles', () => {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(scssCompiler().on('error', scssCompiler.logError))
        .pipe(gulp.dest('./dest/css'))
})

gulp.task('watch', () => {
    return gulp.watch('./src/**/*', gulp.series('styles', 'js'))
});