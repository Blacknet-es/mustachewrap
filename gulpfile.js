var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var mustache = require("gulp-mustache");
var bower = require('gulp-bower');
var mainBowerFiles = require('main-bower-files');

var config = {
  lessDir: './less/**/*.less',
  mustacheDir: './templates/*.mst'
};

gulp.task('mustache', function() {
  gulp.src(config.mustacheDir)
      .pipe(gulp.dest("./dist"));
});

gulp.task('less', function () {
  return gulp.src(config.lessDir)
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('bower', function() {
  return gulp.src(mainBowerFiles(), {
      base: 'bower_components'
    })
    .pipe(gulp.dest('public/lib'));
});

// Monta todos los ficheros
gulp.task('default', ['less', 'mustache', 'bower']);

// Recarga el les cuando recibe cambios en los estilos
gulp.task('watch', ['less']);
