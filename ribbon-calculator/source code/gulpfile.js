const gulp = require( 'gulp' ),
      browserSync = require( 'browser-sync' ),
      reload = browserSync.reload,
      del = require( 'del' ),
      autoprefixer = require( 'gulp-autoprefixer' ),
      concat = require( 'gulp-concat' ),
      babel = require( 'gulp-babel' ),
      minifyJS = require( 'gulp-minify' ),
      minifyCSS = require( 'gulp-clean-css' );

gulp.task( 'serve', () => {
  browserSync( {
    server: {
      baseDir: 'dev'
    }
  } );

  gulp.watch( [ '*.html', '*.css', '*.js' ], reload );
} );

gulp.task( 'js', () => {
  return gulp.src( 'dev/*.js' )
    .pipe( concat( 'script.js' ) )
    .pipe( babel( {
      presets: [ 'es2015' ]
    } ) )
    .pipe( minifyJS( {
      noSource: true,
      ext: {
        min:'.js'
      }
    } ) )
    .pipe( gulp.dest( 'prod' ) );
} );

gulp.task( 'style', () => {
  return gulp.src( 'dev/*.css' )
    .pipe( autoprefixer() )
    .pipe( minifyCSS() )
    .pipe( gulp.dest( 'prod' ) );
} );

gulp.task( 'html', () => {
  gulp.src( 'dev/*.html' )
    .pipe( gulp.dest( 'prod' ) );
} );

gulp.task( 'clean', () => {
  return del( 'prod' );
} );

gulp.task( 'deploy', [ 'style', 'js', 'html' ] );