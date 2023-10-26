// Adiciona os modulos instalados
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function compilaSass() {
  return gulp
    .src('scss/**/*.scss')
    .pipe(sass()) 
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest('theme/css/'))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(concat({ path: 'mainAcao.min.css' })) 
    .pipe(gulp.dest('theme/css/'));
}

// Função para juntar o JS
function gulpJS() {
    return gulp
      .src('theme/js/modules/*.js')
      .pipe(concat('mainAcao.js')) 
      .pipe(babel({ presets: ['@babel/preset-env'] }))
      .pipe(gulp.dest('theme/js/'))
      .pipe(uglify()) 
      .pipe(concat('mainAcao.min.js')) 
      .pipe(gulp.dest('theme/js/'));
  }

// JS Plugins
// function pluginJS() {
//     return gulp
//       .src([
//         // 'node_modules/jquery/dist/jquery.min.js',
//         // 'node_modules/moment/min/moment.min.js',
//         'js/plugins/*.js',
//       ])
//       .pipe(concat('libs.js'))
//       .pipe(gulp.dest('theme/js/'))
//       .pipe(browserSync.stream());
//   }

// Função de watch do Gulp
function watch() {
  gulp.watch('scss/**/*.scss', compilaSass);
  gulp.watch('theme/js/modules/*.js', gulpJS);
//   gulp.watch('js/plugins/*.js', pluginJS);
}

// Inicia a tarefa de watch
exports.compilaSass = compilaSass
exports.gulpJS = gulpJS
// exports.pluginJS = pluginJS
exports.watch = watch

exports.default = gulp.parallel(watch, compilaSass, gulpJS)
