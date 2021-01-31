<!--  title  -->
<h3 align="center" id="title">
  🗺 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 📐 &nbsp; &nbsp; &nbsp; &nbsp; 
  <a href="https://github.com/rooftop-media/shapes#blueprint">QuickShapes Blueprint</a> 
  &nbsp; &nbsp; &nbsp; &nbsp; 📐 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 🗺
</h3>

<br /><br />

<!--  Subtitle -->
<h4 align="center">
  ☜ &nbsp; &nbsp; <a href="https://github.com/rooftop-media/shapes/blob/main/blueprint/0_1_TheIdea.md#title">0.1. The Idea</a> 
  &nbsp; &nbsp; - &nbsp; &nbsp; - &nbsp; &nbsp; ☟ Step 0.2. NodeJS 101 ☟ &nbsp; &nbsp; - &nbsp; &nbsp; - &nbsp; &nbsp; 
  <a href="https://github.com/rooftop-media/shapes/blob/main/blueprint/0_3_SimpleShapes.md#title">0.3. Simple Shapes</a> &nbsp; &nbsp; ☞
</h4>

<br /><br /><br /><br /><br /><br /><br /><br />





Let's warm up by reviewing some NodeJS scripting tools we'll be using.

<br /><br /><br /><br /><br /><br /><br /><br />




First up... variables!! 

```javascript

//  Assign a variable, output it:
var my_var = "Hello world!";
console.log( my_var );  

  //  output:  "Hello world"
```
<br /><br /><br /><br /><br /><br /><br /><br />




Here's the NodeJS terminal output you'll be using ...

```javascript
//  Note two ways to log things to the console... will be important later!

//  console.log  will add an extra line when logging.
console.log( "Keep calm " );
console.log( "and " );
console.log( "carry on." );
//  output:  > Keep calm
//           > and
//           > carry on.
//           > ▓


process.stdout.write( "Keep " ); 
process.stdout.write( "calm " ); 
process.stdout.write( "and carry on." );    
//  output:  > Keep calm and carry on.▓

```
`console.log` docs [here](https://nodejs.org/api/console.html#console_console_log_data_args).
`process.stdout.write` docs [here](https://nodejs.org/api/process.html#process_process_stdout).

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

<br /><br /><br /><br />




You can run this code with NodeJS [from the command line](https://nodejs.dev/learn/run-nodejs-scripts-from-the-command-line).
You should see the output as described!

