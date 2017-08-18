'use strict';

import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import handlebars from 'gulp-handlebars';
import concat from 'gulp-concat';
import declare from 'gulp-declare';
import wrap from 'gulp-wrap';
import cssnano from 'gulp-cssnano';
import uglify from 'gulp-uglify';
import pump from 'pump';
import imagemin from 'gulp-imagemin';

gulp.task("html", () => {
    return gulp.src("./app/*.html")
        .pipe(gulp.dest("./build"))
        .pipe(browserSync.stream());
});

gulp.task("img", () => {
    return gulp.src("./app/img/**.*")
        .pipe(gulp.dest("./build/img/"))
});

gulp.task("font", () => {
    return gulp.src("./app/fonts/**.*")
        .pipe(gulp.dest("./build/fonts/"))
});

gulp.task("handlebars", () => {
    return gulp.src("bower_components/handlebars/handlebars.min.js")
        .pipe(gulp.dest("./build/vendor"))
});

gulp.task("polyfill", () => {
    return gulp.src("node_modules/viewport-units-buggyfill/viewport-units-buggyfill.js")
        .pipe(gulp.dest("./build/vendor"))
});

gulp.task('templates', function () {
  gulp.src('./app/templates/*.hbs')
    .pipe(handlebars({
      handlebars: require('handlebars')
    }))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('build/js/'));
});

gulp.task("styles", () => {
    return gulp.src("./app/sass/**/*.scss")
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest("./build/css"))
        .pipe(browserSync.stream());
});

gulp.task("scripts", () => {
    return browserify({
            entries: ["./app/js/index.js"]
        })
        .transform(babelify.configure({
            presets: ["es2015"]
        }))
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("./build/js"))
        .pipe(browserSync.stream());
});

gulp.task('compressjs', (cb) => {
  pump([
        gulp.src('build/js/*.js'),
        uglify(),
        gulp.dest('build/js')
    ],
    cb
  );
});

gulp.task('compressimg', () =>
    gulp.src('./app/img/**.*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
);

gulp.task('compresscss', () =>
    gulp.src('./build/css')
        .pipe(cssnano())
        .pipe(gulp.dest('./build/css'))
);

gulp.task("startServer", () => {
    browserSync.init({
        server: "./build"
    });
});

gulp.task('watch', () => {
    gulp.watch('./app/*.html', ['html']);
    gulp.watch(['./app/js/*.js'], ['scripts']);
    gulp.watch(['./app/sass/**/*.scss'], ['styles']);
    gulp.watch('app/templates/*.hbs', ['templates', 'scripts']);
});

gulp.task("build", ["html", "handlebars", "polyfill", "templates", "scripts", "styles", "img", "font"]);
gulp.task("dev", ["startServer", "watch"]);
gulp.task("prod", ["compressjs", "compresscss", "compressimg"]);
