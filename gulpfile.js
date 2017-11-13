var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var paths = {
  css: ['./quero_cultura/static/css/**/*.css',
        './agents_indicators/static/css/**/*.css',
        './events_indicators/static/css/**/*.css',
        './library_indicators/static/css/**/*.css',
        './mixed_indicators/static/css/**/*.css',
        './museums_indicators/static/css/**/*.css',
        './project_indicators/static/css/**/*.css',
        './space_indicators/static/css/**/*.css'
        ],

  js: ['./quero_cultura/static/js/**/*.js',
        './agents_indicators/static/js/**/*.js',
        './events_indicators/static/js/**/*.js',
        './library_indicators/static/js/**/*.js',
        './mixed_indicators/static/js/**/*.js',
        './museums_indicators/static/js/**/*.js',
        './project_indicators/static/js/**/*.js',
        './space_indicators/static/js/**/*.js'
        ],

  html: ['./quero_cultura/templates/quero_cultura/**/*.html',
         './agents_indicators/templates/agents_indicators/**/*.html',
         './events_indicators/templates/events_indicators/**/*.html',
         './library_indicators/templates/library_indicators/**/*.html',
         './mixed_indicators/templates/mixed_indicators/**/*.html',
         './museums_indicators/templates/museums_indicators/**/*.html',
         './project_indicators/templates/project_indicators/**/*.html',
         './space_indicators/templates/space_indicators/**/*.html'
        ],
};

//Browser reload
gulp.task('watch_update_on_file', function() {
    browserSync.init({
        notify: false,
        open: false,
        proxy: "localhost:8000"
    });
    gulp.watch(paths.css, reload);
    gulp.watch(paths.js, reload);
    gulp.watch(paths.html, reload);
});

//Minify JS and CSS


//Generate build
