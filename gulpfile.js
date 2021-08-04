const gulp        = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// Static server



gulp.task("styles", function () {
    return gulp.src("src/sass/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe (rename({prefix: "", suffix: ".min"}))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("scr/css"));
})

gulp.task("watch", function () {
    gulp.watch("src/sass/*.+(scss|sass",gulp.parallel("styles"));
})

gulp.task("default", gulp.parallel("watch", "styles"));