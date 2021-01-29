


/**  A graph function!   */
function graph( w, h, rule ) {

    /**  Build the string here.                                  */
    var shape_string  = "";

    /**  Loop through lines, starting at height, going down.     */
    for ( var y = h; y > 0; y-- ) {
	
	/**  For each line, go through each "x" from 0 to width.       */
	for ( var x = 0; x < w; x++ ) {
	    
	    /**  Draw if the rule is true when passed x and y.               */
	    if ( rule(x,y) )
		process.stdout.write("*");
	    else 
		process.stdout.write(" ");
	    
	} //  End of 1 line.
	
	/**  Write an endline. */
	process.stdout.write("\n");
	
    }

}



function draw_line(x, y) {
    return y == Math.floor( (x * x) / 6 );
}
graph( 20, 20, draw_line );


function draw_ellipse( x, y ) { 

    /**  The radius of our circle (6) squared */
    var radius_sq  = 36;
    
    /**  How far the point is from the center. */
    var distance   = Math.pow(x-10, 2) + Math.pow(y-10, 2);
    var diff       = Math.abs(radius_sq - distance);
    return ( diff < 8 );
}

graph( 20, 20, draw_ellipse );

