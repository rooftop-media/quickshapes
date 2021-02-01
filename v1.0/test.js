//  shapes / v1.0 / test.js
//  Test the functions in QuickShape v1.0.

var QuickShape = require("./shapes.js");



//  Drawing a square:
QuickShape.draw_square( 5, "* ", true );
QuickShape.draw_square( 6, "# ", false );




//  Drawing a triangle:
QuickShape.draw_triangle( 5, "* ", true );
QuickShape.draw_triangle( 6, "* ", false );
