
// Load the module.
var gulp = require('gulp');
var svgSprite    = require( 'gulp-svg-sprite' );

// Set our desired configuration values.
svgConfig = {
    mode: {
        // Make sure we're combining icons
        // using the <symbol> method.
        symbol: true,
        // inline: true,
        // defs: false,
        // stack: true
    },
    // Some more settings to keep
    // the SVG's code clean:
    svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false,
        // By default the module wants to namespace
        // all our IDs and classes. We're grownups
        // so we want to preserve our settings.
        namespaceIDs: false,
        namespaceClassnames: false
    }
};

// Define our task.
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