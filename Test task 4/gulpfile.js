const gulp = require( 'gulp' ),
      browserSync = require( 'browser-sync' ).create(),
      scss = require( 'gulp-sass' ),
      flatten = require( 'gulp-flatten' ),
      path = require( 'path' );

// Модули используемые в проекте
let needModules = [
  'bootstrap',
  'font-awesome'
].join(',');


// Копирую css и js файлы из node_modules в проект
gulp.task( 'copy:css:and:js', () => {
  return gulp.src( `node_modules/{${ needModules }}/**/*.{js,scss}` )
    .pipe( gulp.dest( function( file ) {
      let ext = path.extname(file.relative);
      if ( ext == '.js' ) {
        return 'src/js/vendor/';
      } else if ( ext == '.scss' ) {
        return 'src/scss/vendor/';
      }
    } ) )
} )

// Копирую файлы шрифтов из node_modules в проект
gulp.task( 'copy:fonts', () => {
  return gulp.src( `node_modules/{${ needModules }}/**/*.{ttf,eot,svg,woff,woff2,otf}` )
    .pipe( flatten() )
    .pipe( gulp.dest('src/fonts/') )
} );

// Создаю конфигурацию
gulp.task( 'create:config', () => {
  return gulp.src( `src/scss/vendor/**/scss/{${ needModules }}.scss` )
         .pipe( flatten() )
         .pipe( gulp.dest('src/scss/config') )
} );

// Комилирую scss код в css
gulp.task( 'sassToCss', () => {
  return gulp.src( ['src/scss/*.scss', 'src/scss/config/**/*.scss'] )
    .pipe( scss() )
    .pipe( flatten() )
    .pipe( gulp.dest( 'src/css/' ) )
    .pipe( browserSync.stream() );
} );

// Отслеживаю изменения, синхронизирую с браузером
gulp.task( 'serve', ['sassToCss'], () => {
  browserSync.init( {
    server: './src'
  } );
  gulp.watch( ['src/scss/*.scss', 'src/scss/config/**/*.scss'], ['sassToCss'] );
  gulp.watch( ['src/index.html', 'src/js/*.js'] ).on( 'change', browserSync.reload );
} );

gulp.task( 'default', [ 'serve' ] );