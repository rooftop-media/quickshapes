<!--  title  -->
<h3 align="center" id="title">
  🗺 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 📐 &nbsp; &nbsp; &nbsp; &nbsp; 
  <a href="https://github.com/rooftop-media/shapes#blueprint">QuickShapes Blueprint</a> 
  &nbsp; &nbsp; &nbsp; &nbsp; 📐 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 🗺
</h3>

<br /><br />

<!--  Subtitle -->
<h4 align="center">
  ☜ &nbsp; &nbsp; <a href="https://github.com/rooftop-media/shapes/blob/main/blueprint/0_2_DrawSquaresAndTriangles.md#title">0.2. Draw Squares & Triangles</a> 
  &nbsp; &nbsp; - &nbsp; &nbsp; - &nbsp; &nbsp; ☟ Step 0.3. Export and Test ☟ &nbsp; &nbsp; - &nbsp; &nbsp; - &nbsp; &nbsp; 
  <a href="https://github.com/rooftop-media/shapes/blob/main/blueprint/0_4_Publishing.md#title">0.4. Publishing the Package</a> &nbsp; &nbsp; ☞
</h4>

<br /><br /><br /><br />



##  Export and Test Your Code

> *You peek back at the todo list.*  
>
> *Next up: you want to [export](https://nodejs.dev/learn/expose-functionality-from-a-nodejs-file-using-exports) your functions.*  
> *Then you'll write a `test.js` file, to show how they can be imported and used!*

> *This step should be nice & short, you think.*


<br/><br/>


###  📐 Todo List  ( QuickShape v 1.0. )

 - [x] 1. Write out a feature list.
 
 - [x] 2. Program those features.

 - [ ] 3. Export & test.
 
 - [ ] 4. Document, package, & publish.
 
 - [ ] 5. Any revisions.
 
 
 
 <br/><br/><br/><br/>

 
###  Exporting Functions
 
> *First, you delete any tests in `quickshapes/draw.js*  
> *You'll rewrite them in `test.js`.*
> 
> *Then you export your two functions. Tada! Exported!*


```javascript
//  quickshapes / draw.js
//  Functions to draw shapes to the terminal.

module.exports.draw_square = function draw_square( size, draw_material, filled ) {
  /*   draw_square code here.     */
}

module.exports.draw_triangle = function draw_triangle( size, draw_material, filled ) {
  /*   draw_triangle code here.   */
}
 
```

<br/><br/><br/><br/>


###  Importing & Testing

> *You open a new file: `quickshapes/test.js`


```javascript
//  quickshapes / test.js
//  Test the functions in QuickShape v1.0.                                                                                      

var QuickShape = require("./draw.js");


//  Drawing a square:                                                                                                           
QuickShape.draw_square( 5, "* ", true );
QuickShape.draw_square( 6, "# ", false );




//  Drawing a triangle:                                                                                                         
QuickShape.draw_triangle( 5, "* ", true );


 
```
 
 
<br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/>



 
 
 
