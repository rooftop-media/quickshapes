<!--  Page Header  -->
<h3 align="center">
  <a href="https://github.com/rooftop-media/shapes#blueprint"> 📐 </a> &nbsp; &nbsp; QuickShapes Blueprint
</h3>

<br />

<!--  Subtitle -->
<h4 align="center">
  ☜ &nbsp; &nbsp; <a href="https://github.com/rooftop-media/shapes/blob/main/blueprint/0_0_HowToUse.md">0.0. How To Use</a> 
  &nbsp; &nbsp; - &nbsp; &nbsp; - &nbsp; &nbsp; ☟ Step 0.1. NodeJS 101 ☟ &nbsp; &nbsp; - &nbsp; &nbsp; - &nbsp; &nbsp; 
  <a href="https://github.com/rooftop-media/shapes/blob/main/blueprint/0_2_SimpleShapes.md">0.2. Simple Shapes</a> &nbsp; &nbsp; ☞
</h4>

<br /><br /><br /><br />



Let's warm up by reviewing some NodeJS scripting tools we'll be using.

<br /><br /><br /><br />

First up... variables!! 

```javascript

//  Assign a variable, output it:
var my_var = "Hello world!";
console.log( my_var );  

  //  output:  "Hello world"
```
<br /><br /><br /><br />

Here's some output stuff...

```
//  Note two ways to log things to the console... will be important later!
process.stdout.write( "Keep " ); //  These DON'T add a "line break" when logging.  
process.stdout.write( "calm " ); //   ( UNLIKE console.log, which DOES. )
console.log( "and carry on." );    

  //  output:  Keep calm and carry on.

```

<br /><br /><br /><br />

We'll use [for-loops](https://www.w3schools.com/js/js_loop_for.asp) to iterate through arrays. 

```
//  A for-loop...
for ( var i = 0; i < 10; i++ ) {
  process.stdout.write( i );
}
process.stdout.write( "\n" );
//  output:  0123456789;
  
//  Loop through an array...
var my_list = [ "blinky", "pinky", "inky", "clyde" ];
for ( var i = 0; i < my_list.length; i++ ) {
  console.log( my_list[i] );
}
//  output:  inky


//  A conditional, inside a for-loop:
for ( var i = 0; i < 8; i++ ) {
  if ( i % 2 == 0 ) {
    process.stdout.write("- . - ");
  }
  else {
    process.stdout.write("+ # + ");
  }
}
process.stdout.write("\n");

  //  output:  "- . - + # + - . - + # + - . - + # + - . - + # + "

```

You can run this code with NodeJS [from the command line](https://nodejs.dev/learn/run-nodejs-scripts-from-the-command-line).
You should see the output as described!

If the code is unclear, this might be a good 

