const { src, dest, pipe } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const csso = require('gulp-csso');

sass.compiler = require('node-sass');

// Task to compile SASS, prefix CSS and minify it
function compile() {
    return src('scss/main.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 5 versions']
            }))
            .pipe(csso())
            .pipe(rename('main.css'))
            .pipe(dest('assets/css'))
}

exports.build = compile;
