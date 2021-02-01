<!--  title  -->
<h3 align="center" id="title">
  🗺 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 📐 &nbsp; &nbsp; &nbsp; &nbsp; 
  <a href="https://github.com/rooftop-media/shapes#blueprint">QuickShapes Blueprint</a> 
  &nbsp; &nbsp; &nbsp; &nbsp; 📐 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 🗺
</h3>

<br /><br />

<!--  Subtitle -->
<h4 align="center">
  ☜ &nbsp; &nbsp; <a href="https://github.com/rooftop-media/shapes/blob/main/blueprint/0_1_Outline.md#title">0.1. QuickShapes Outline</a> 
  &nbsp; &nbsp; - &nbsp; &nbsp; - &nbsp; &nbsp; ☟ Step 0.2. Draw Squares & Triangles ☟ &nbsp; &nbsp; - &nbsp; &nbsp; - &nbsp; &nbsp; 
  <a href="https://github.com/rooftop-media/shapes/blob/main/blueprint/0_3_ExportAndTest.md#title">0.3. Export and Test </a> &nbsp; &nbsp; ☞ &nbsp; 
</h4>




<br /><br /><br /><br /><br /><br /><br /><br />




##  Drawing Squares and Triangles.

> *You review the to-do list you just wrote.*  
>
> *You're now on step 2!*



<br/><br/><br/>



###  📐 Todo List  ( QuickShape v 1.0. )

 - [x] 1. Write out a feature list.
 
 - [ ] 2. Program those features.

 - [ ] 3. Build tests.
 
 - [ ] 4. Document, package, & publish.
 
 - [ ] 5. Any revisions.
 
 
 <br /><br />
 
 
> *Nice!  You're ready to tackle the Feature List.*

 ###  📐 Planned Features ( QuickShape v 1.0. )
 
 [ Filled square features ](#square1)
 - [ ] `draw_square` function, that draws a square.
   - [ ] Customizable square size.
   - [ ] Customizable draw text. 
   
 [ Hollow square features ](#square2)
   - [ ] A "filled" vs. "hollow" mode.
   - [ ] Optional printed description, for debugging.
   
 [ Triangle features ](#triangle1)
 - [ ] `draw_triangle` function, that draws a triangle.
   - [ ] Customizable triangle size.
   - [ ] Customizable draw text.
   - [ ] A "filled" vs. "hollow" mode.
   - [ ] Optional printed description, for debugging.



<br /><br /><br /><br /><br /><br /><br /><br />



<h3 id="square1"> 📐 Drawing a square </h3>

Output a square of text characters, using two nested for-loops. 

```javascript

function draw_square( size, draw_material ) {

    /**  For each line in height...     */
    for ( var line_count = 0; line_count < size; line_count++ ) {

        /**  For each character in a line...     */
        for ( var char_count = 0; char_count < size; char_count++ ) {

            /**  Draw text!  This will make a filled square.   */
            process.stdout.write( draw_material );

        }

        /**  Add a line break after each line.    */
        process.stdout.write("\n");

    }

}

```

 - [x] `draw_square` function, that draws a square.
   - [x] Customizable square size.
   - [x] Customizable draw text.
   - [ ] A "filled" vs. "hollow" mode.
   - [ ] Optional printed description, for debugging.
   
 
 <br/><br/><br/><br/>

 
 <h3 id="square2">📐 Draw a hollow square</h3>
 
 Next, use conditional logic to check if a given space  
 is an "edge" space, and draw "non-filled" squares that way.
 
 At the end of the function, add the description.
 
```javascript

function draw_square( size, draw_material, filled ) {

    /**  For each line in height...               */
    for ( var line_count = 0; line_count < size; line_count++ ) {

        /**  For each character in a line...              */
        for ( var char_count = 0; char_count < size; char_count++ ) {

            //  Conditional logic for filled vs not filled...

            /**  If no fill and not an edge, leave blank...    */
            if ( !filled && line_count != 0 && line_count != (size-1) && char_count != 0 && char_count != (size-1) ) {
                process.stdout.write( "  " );
            }

            /**  Otherwise, draw!                              */
            else {
                process.stdout.write( draw_material );
            }

        }

        /**  Add a line break after each line.           */
        process.stdout.write("\n");

    }

    // Log the square's details:
    
    /**  Describe the "filled" status, in the shape name.    */
    var shape_name = "filled square";
    if ( !filled )
        shape_name = "hollow square";

    /**  Log the description.                                 */
    process.stdout.write( "A _" + shape_name );
    process.stdout.write( "_, of size _" + size );
    process.stdout.write( "_, made of _" + draw_material + "_ .\n\n" );

}

```

 - [x] `draw_square` function, that draws a square.
   - [x] Customizable square size.
   - [x] Customizable draw text.
   - [x] A "filled" vs. "hollow" mode.
   - [x] Optional printed description, for debugging.



 <br/><br/><br/><br/>
 
 
 
 <h3 id="triangle1"> 📐 Drawing a triangle </h3>
 
 Output a square of text characters, using two nested for-loops. 

```javascript

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












