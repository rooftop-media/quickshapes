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
  &nbsp; &nbsp; - &nbsp; &nbsp; - &nbsp; &nbsp; ☟ Step 0.2. Draw Squares & Triangles ☟ &nbsp; &nbsp; - &nbsp; &nbsp; - &nbsp; &nbsp; 
  <a href="https://github.com/rooftop-media/shapes/blob/main/blueprint/0_3_ExportAndTest.md#title">0.3. Export and Test </a> &nbsp; &nbsp; ☞
</h4>

<br /><br /><br /><br /><br /><br /><br /><br />


> *Your todo list looks like this:*

Todo List ( QuickShape v 1.0. )
 - [ ] 1. Explain the idea, plan features.

 - [ ] 2. Code those features.
 
 <br /><br />

> *The square should be fairly simple to draw*
> *if you're okay with the NodeJS basics.*

> *You decide to take it step by step...*

<br /><br /><br /><br /><br /><br /><br /><br />




> *To make sure NodeJS is working, you write & run Hello World.*

```javascript

//  Assign our string to a new variable:
var my_var = "Hello world!! :)";

//  Log the variable's value to the terminal:
console.log( my_var );  

//  output:  > Hello world!! :)
```

<br /><br /><br /><br /><br /><br /><br /><br />



> *You then delete that all, and try out a for-loop:*

```javascript

//  Iterate through numbers 0 through 3...
for ( var i = 0; i < 5; i++ ) {
  console.log( i );
}

//  output:  > 0
//           > 1
//           > 2
//           > 3
//           > 4
```

> *The for-loop makes sense, but you don't*
> *want the numbers to each print on a new line.*

> *You remember that NodeJS has a different*
> *terminal logging method for logging without*
> *breaking lines.*

```javascript

//  Iterate through numbers 0 through 10...
for ( var i = 0; i < 10; i++ ) {
  process.stdout.write( i );
}
process.stdout.write( "\n" );

//  output:  > 0123456789
```

> *Nice, now the output is all on one line.*

> *You log a "\\n" at the end, to tell the terminal to add a "newline", aka a line break.*



<br /><br />

> *You note the docs on these two terminal logging methods,*  
> *in case their subtle difference ever comes up again...*

`console.log` docs [here](https://nodejs.org/api/console.html#console_console_log_data_args).
`process.stdout.write` docs [here](https://nodejs.org/api/process.html#process_process_stdout).

<br /><br /><br /><br />





















