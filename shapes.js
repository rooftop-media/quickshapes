

/**  Subfunction to draw characters.      */
function draw_if( condition ) {
    if (condition) {
	process.stdout.write("#");
    }
    else {
	process.stdout.write(" ");
    }
	
}


/**  Drawing a box.                       */
function draw_box( height, width, filled ) {

    for ( var y = 0; y < height; y++ ) {
	for ( var x = 0; x < width; x++ ) {
	    var is_edge = ( y == 0 || x == 0 || y == (height-1) || x == (width-1) );
	    draw_if( filled || is_edge );
	}
	process.stdout.write("\n");
    }
    process.stdout.write("\n");

}

draw_box( 4, 6, true );
draw_box( 5, 7, false );

return;

function draw_ellipse( height, width, filled ) {
    for ( var y = 0; y < height; y++ ) {
	for ( var x = 0; x < width; x++ ) {
	    draw_if( Math.pow(x+1,2) + Math.pow(y+1,2) == Math.pow(width/2,2) );
	}
	process.stdout.write("\n");
    }
    process.stdout.write("\n");
}

draw_ellipse( 8, 8, true );


/*

  ____
  ____
  ____
  ____





 */