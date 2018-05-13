
// Load the module.
var gulp = require('gulp');
var svgSprite    = require( 'gulp-svg-sprite' );

// svgSprite configuration.
svgConfig = {
    mode: {
        //  combining icons using the <symbol> method.
        symbol: true,
        // inline: true,
        // defs: false,
        // stack: true
    },
    // Some settings to clean the svg code:
    svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false,
        namespaceIDs: false,
        namespaceClassnames: false
    }
};

// Task for generating the svg sprite
gulp.task( 'svg-sprite', function() {
    // Set the source folder.
    gulp.src( 'images/svg/*.svg' )
    // Include our options.
    .pipe( svgSprite( svgConfig ) )
    // Set the destination folder.
    .pipe( gulp.dest( 'dist' ) );
});
// type gulp in command line to run the task
gulp.task('default', ['svg-sprite']);