//  quickshapes / Canvas / Canvas.js
//  The Canvas data object.


//  Function to view canvas:
var _view           = require( __dirname + "/view.js" );

//  Function to add a rectangle:
var _new_rectangle  = require( __dirname + "/Shapes/rectangle.js" );

//  Function to add a line:
var _new_line       = require( __dirname + "/Shapes/line.js" );


//  
module.exports = class Canvas {

    /**  Making a new QuickShapes canvas instance.     */
    constructor() {

	this.height    = 5;
	this.width     = 5;
	this.x_offset  = 0;    /**  The canvas grid displays relative to the ORIGIN (0,0),    */
	this.y_offset  = 0;    /**   which displays bottom left of the grid- unless _offset!  */


	//  Shapes:
	this.shapes = [];

    }

    /**  View the grid!                                */
    view() {
	_view( this );
    }

    /**  Add a rectangle to the canvas!                */
    new_rectangle( config ) {
	var rectangle   = _new_rectangle( config );
	this.shapes.push( rectangle );
    }

    /**  Add a line!                                   */
    new_line( config ) {
	var line   = _new_line( config );
	this.shapes.push( line );
    }

}