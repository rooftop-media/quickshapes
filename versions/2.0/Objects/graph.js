//  quickshapes / methods / graph.js

//  Draw a grid
module.exports = function graph( height, width, rule, material ) {

    /**  Store whitespace of equal size to the material.   */
    var white_space = "";
    for ( var i = 0; i < material.length; i++ ) {
        white_space += " ";
    }


    /**  We draw down, so loop down thru lines.    */
    for ( var y = height - 1; y >= 0; y-- ) {
        for ( var x = 0; x < width; x++ ) {

            /**  If the rule is true for this x and y, draw.   */
            if ( rule( x, y ) ) {
                process.stdout.write( material );
            }

            /**  If the rule is false, draw whitespace.        */
            else {
                process.stdout.write( white_space );
            }

        }

        /**  break after each line.    */
        process.stdout.write( "\n" );

    }

    /**  Line break at the end.      */
    process.stdout.write( "\n" );

}