
//  Shapes.js Version 1



//  Draw a square...
module.exports.draw_square = function draw_square( size, draw_material, filled ) {

    /**  For each line in height...     */
    for ( var line_count = 0; line_count < size; line_count++ ) {
	
	/**  For each character in a line...     */
	for ( var char_count = 0; char_count < size; char_count++ ) {

	    /**  If no fill and not an edge, leave blank...    */
	    if ( !filled && line_count != 0 && line_count != (size-1) && char_count != 0 && char_count != (size-1) ) {
		process.stdout.write( "  " );
	    }

	    /**  Otherwise, draw! */
	    else {
		process.stdout.write( draw_material );
	    }

	}

	/**  Add a line break after each line.    */
	process.stdout.write("\n");

    }

    /**  Log the square's details.    */
    var shape_name = "filled square";
    if ( !filled ) 
	shape_name = "hollow square";

    process.stdout.write( "A _" + shape_name );
    process.stdout.write( "_, of size _" + size );
    process.stdout.write( "_, made of _" + draw_material + "_ .\n\n" );

}



//  Draw a triangle...
module.exports.draw_triangle = function draw_triangle( size, draw_material, filled ) {

    /**  For each line in height...     */
    for ( var line_count = 0; line_count < size; line_count++ ) {
	
	/**  For each character in a line...     */
	for ( var char_count = 0; char_count < size; char_count++ ) {

	    /**  Check if we're passed the diagonal...    */
	    if ( char_count <= line_count ) {
		process.stdout.write("* ");
	    }
	    else {
		process.stdout.write("  ");
	    }
	}

	/**  Break after each line.    */
	process.stdout.write("\n");

    }

    /**  Log the triangle's details.    */
    console.log( "A _triangle_, of size _" + size + "_ , made of _" + draw_material + "_ .\n" );

}
