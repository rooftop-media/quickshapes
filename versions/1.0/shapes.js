
//  Shapes.js Version 1


//  private function to log shape details.
function log_shape( name, size, draw_material ) {
    process.stdout.write( " Shape name: \u001b[1m" + name + "\u001b[0m  \n" );
    process.stdout.write( " Size: \u001b[1m" + size + "\u001b[0m  \n" );
    process.stdout.write( " Material: \u001b[1m" + draw_material + "\u001b[0m \n\n" );
}


//  Draw a square...
module.exports.solid_square = function solid_square( size, draw_material ) {

    /**  For each line in height...         */
    for ( var line_count = 0; line_count < size; line_count++ ) {
	
	/**  For each character in a line...      */
	for ( var char_count = 0; char_count < size; char_count++ ) {

	    /**  Draw!!                                 */
	    process.stdout.write( draw_material );
	    
	}

	/**  Add a line break after each line.    */
	process.stdout.write("\n");

    }

    /**  Log the square's details.          */
    log_shape( "solid square", size, draw_material );

}


//  Draw a Hollow Square...
module.exports.hollow_square = function hollow_square( size, draw_material ) {

    /**  For each line in height...     */
    for ( var line_count = 0; line_count < size; line_count++ ) {
	
	/**  For each character in a line...     */
	for ( var char_count = 0; char_count < size; char_count++ ) {

	    /**  If it's not an edge, leave blank...    */
	    if ( line_count != 0 && line_count != (size-1) && char_count != 0 && char_count != (size-1) ) {
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
    log_shape( "hollow square", size, draw_material );

}



//  Draw a solid triangle...
module.exports.solid_triangle = function solid_triangle( size, draw_material ) {

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
    log_shape( "solid triangle", size, draw_material );

}


//  Draw a hollow triangle...
module.exports.hollow_triangle = function hollow_triangle( size, draw_material ) {

    /**  For each line in height...     */
    for ( var line_count = 0; line_count < size; line_count++ ) {
	
	/**  For each character in a line...     */
	for ( var char_count = 0; char_count < size; char_count++ ) {

	    /**  Check if we're on the diagonal or sides... */
	    if ( char_count == line_count || char_count == 0 || line_count == size-1 ) {
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
    log_shape( "hollow triangle", size, draw_material );

}
