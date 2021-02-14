//  quickshapes / methods / view.js

var _graph = require( __dirname + "/graph.js" );


//  View your quickshapes!
module.exports = function view( quickshapes ) {
    
    var shape_list = this.shapes;
    
    //  Rule to apply all rules!                                                                                            
    function canvas_rule(x,y) {
	for ( var i = 0; i < shape_list.length; i++ ) {
	    var shape = shape_list[i];
	    if ( shape.rule(x,y) ) {
		return true;
	    }
	}
	return false;
    }
    _graph ( this.canvas.height, this.canvas.width, canvas_rule, "* " );
    
}