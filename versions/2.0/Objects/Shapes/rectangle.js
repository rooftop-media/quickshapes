//  quickshapes / shapes / rect.js

/*   this  what we're makin:

 * * * * * 
 * * * * *
 * * * * *
 * * * * *

 */



module.exports = function new_rect( shape ) {

    //  Do some validation, shorten var names....
    
    if (typeof shape.data.height != "number") {
	shape.data.height = 5;
    }
    var height = shape.data.height;

    if ( typeof shape.data.width != "number" ) {
	shape.data.width = 5;
    }
    var width = shape.data.width;

    if ( typeof shape.data.xpos  != "number" ) {
	shape.data.xpos = 0;
    }
    var xpos = shape.data.xpos;

    if ( typeof shape.data.ypos  != "number" ) {
	shape.data.ypos = 0;
    }
    var ypos = shape.data.ypos;

    //  Let's  get the rectangle rule. 
    function rect_rule(x, y) {
	return (    xpos < x && x < xpos + width 
		    && ypos < y && y < ypos + height );
    }

    shape.rule = rect_rule;
    return shape;

}