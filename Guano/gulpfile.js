const gulp = require( 'gulp' ),
      browserSync = require( 'browser-sync' ).create(),
      scss = require( 'gulp-sass' ),
      flatten = require( 'gulp-flatten' ),
      path = require( 'path' );

let needModules = [
  'bootstrap',
  'font-awesome',
  'jquery',
  'slick-carousel'
].join(',');

gulp.task( 'copy', () => {
  return gulp.src( `node_modules/{${ needModules }}/**/*.{js,scss}` )
    .pipe( gulp.dest( function( file ) {
      let ext = path.extname(file.relative);
      console.log( ext );
      if ( ext == '.js' ) {
        return 'src/js/vendor/';
      } else if ( ext == '.scss' ) {
        return 'src/scss/vendor/';
      }
    } ) )
} )

gulp.task( 'copy:fonts', () => {
  return gulp.src( `node_modules/{${ needModules }}/**/*.{ttf,eot,svg,woff,woff2,otf}` )
    .pipe( flatten() )
    .pipe( gulp.dest('src/fonts/') )
} )

gulp.task( 'sassToCss', () => {
  return gulp.src( 'src/scss/*.scss' )
    .pipe( scss() )
    .pipe( gulp.dest( 'src/css/' ) )
    .pipe( browserSync.stream() );
} );

gulp.task( 'serve', ['sassToCss'], () => {
  browserSync.init( {
    server: './src'
  } );

  gulp.watch( ['src/**/bootstrap.scss', 'src/scss/*.scss'], ['sassToCss'] );
  gulp.watch( 'src/index.html' ).on( 'change', browserSync.reload );
} );

gulp.task( 'default', [ 'serve' ] );