//  shapes / version / 2.0 / tests / rect.js
//  Test the functions in QuickShape v2.0.  

var QuickShape = require("./../shapes.js");


console.log("\n Testing QuickShapes v 2.0.\n\n" );

//  Make a new quickshape:

var quickshape = new QuickShape();
quickshape.canvas.height = 10;
quickshape.canvas.width = 20;



console.log("Testing a 4x5 rectangle: ");

quickshape.new_rect( { width: 4, height: 5 } );
quickshape.draw();
