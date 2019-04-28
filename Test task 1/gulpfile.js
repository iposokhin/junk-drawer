var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
   var files = [
      '*.html',
      '*.css'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './'
      }
   });
});