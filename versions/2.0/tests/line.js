//  shapes / v2.0 / tests / line.js
//  Test the functions in QuickShape v2.0.  

/**  Import QuickShapes!   */
var QuickShapes = require("./../QuickShapes.js");



console.log("\n Testing QuickShapes v 2.0.\n\n" );



//  Make a new QuickShapes canvas:

var canvas    = QuickShapes.new_canvas();
canvas.height = 10;
canvas.width  = 20;


//  Test 1  -  draw a line:

console.log("Testing a line, of slope 1:");

canvas.new_line( { slope: 1, yintercept: 1 } );
canvas.draw();


console.log("Okay, let's add some lines:");

canvas.new_line( { slope: 2, yintercept: 1 } );
canvas.new_line( { slope: .5, yintercept: 1 } );
canvas.draw();
