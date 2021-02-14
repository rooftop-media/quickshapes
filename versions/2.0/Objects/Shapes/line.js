//  quickshapes / shapes / line.js

/*   this  what we're makin:

       *  
     * 
   * 
 * 

 */



module.exports = function new_line( config ) {

    //  
    var shape = {
	type: "line",
	
    }



    //  Do some validation....
    
    if ( typeof config.slope != "number" ) {
	config.slope = 1;
    }
    var slope = shape.data.slope;

    if ( typeof shape.data.yintercept  != "number" ) {
	shape.data.yintercept = 0;
    }
    var yintercept = shape.data.yintercept;

    //  the line rule
    function line_rule(x, y) {
	return y == ( slope * x ) + yintercept;
    }

    shape.rule = line_rule;
    return shape;

}