<!--  title  -->
<h3 align="center" id="title">
  🗺 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 📐 &nbsp; &nbsp; &nbsp; &nbsp; 
  <a href="https://github.com/rooftop-media/shapes#blueprint">QuickShapes Blueprint</a> 
  &nbsp; &nbsp; &nbsp; &nbsp; 📐 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 🗺
</h3>

<br /><br />

<!--  Subtitle -->
<h4 align="center">
  ☜ &nbsp; &nbsp; <a href="https://github.com/rooftop-media/shapes/blob/main/blueprint/0_1_DrawSquares.md#title">0.1. QuickShapes Outline</a> 
  &nbsp; &nbsp; - &nbsp; &nbsp; - &nbsp; &nbsp; ☟ Step 0.2. Draw Triangles ☟ &nbsp; &nbsp; - &nbsp; &nbsp; - &nbsp; &nbsp; 
  <a href="https://github.com/rooftop-media/shapes/blob/main/blueprint/0_3_ExportAndTest.md#title">0.3. Export and Test </a> &nbsp; &nbsp; ☞ &nbsp; 
</h4>




<br /><br /><br /><br /><br /><br /><br /><br />



 
 
 <h3 id="triangle1"> 📐 Drawing a triangle </h3>
 
 Output a square of text characters, using two nested for-loops. 

```javascript
//  quickshapes / draw.js
//  Functions to draw shapes to the terminal.

function draw_square( size, draw_material ) {
    /*  draw_square code here.      */
}

function draw_triangle( size, draw_material, filled ) {

    /**  For each line in height...     */
    for ( var line_count = 0; line_count < size; line_count++ ) {

        /**  For each character in a line...     */
        for ( var char_count = 0; char_count < size; char_count++ ) {

            /**  Check if we're passed the diagonal...    */
            if ( char_count <= line_count ) {
                process.stdout.write("* ");
            }
            else {
                process.stdout.write("  ");
            }
        }

        /**  Break after each line.    */
        process.stdout.write("\n");

    }

    /**  Log the triangle's details.    */
    console.log( "A _triangle_, of size _" + size + "_ , made of _" + draw_material + "_ .\n" );

}

```

 <br/><br/><br/><br/> <br/><br/><br/><br/>
 <br/><br/><br/><br/> <br/><br/><br/><br/>
 
 

> *Look at the todo list again...*

<br/>

###  📐 Todo List  ( QuickShape v 1.0. )

 - [x] 1. Write out a feature list.
 
 - [x] 2. Program those features.

 - [ ] 3. Export functions, write tests.
 
 - [ ] 4. Document, package, & publish.
 
 - [ ] 5. Any revisions.


<br/>

> *It's time to [write some tests!](https://github.com/rooftop-media/shapes/blob/main/blueprint/0_3_ExportAndTest.md#title)!


 <br/><br/><br/><br/> <br/><br/><br/><br/>
 <br/><br/><br/><br/> <br/><br/><br/><br/>






