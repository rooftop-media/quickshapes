<!--  Page Header  -->
<h3 align="center">
  <a href="https://github.com/rooftop-media/shapes#blueprint"> 📐 </a> &nbsp; &nbsp; QuickShapes Blueprint
</h3>

<br />

<!--  Subtitle -->
<h4 align="center">
  ☜ &nbsp; &nbsp; <a href="https://github.com/rooftop-media/shapes/blob/main/blueprint/1_0_SoftwarePlanning.md">1.0. Software Planning</a> 
  &nbsp; &nbsp; - &nbsp; &nbsp; - &nbsp; &nbsp; ☟ Step 1.1. Coordinates System ☟ &nbsp; &nbsp; - &nbsp; &nbsp; - &nbsp; &nbsp; 
  <a href="https://github.com/rooftop-media/shapes/blob/main/blueprint/1_2_DrawCurves.md">1.2. Drawing Curves</a> &nbsp; &nbsp; ☞
</h4>

<br /><br /><br /><br />




<h2 id="coordinates">Coordinate System</h2>

let's make a coordinate drawing system, with 2 for-loops.

The outer for-loop will track each line on the _y-axis_.
We'll start at max height and loop _down_, since the first line is at the top. 

The inner for-loop will track each character on the _x-axis_, inside of each line.

Inside each inner loop we can either draw or not draw, based on some function that
we can call with our `x`, `y` coordinates.

It looks like this:

```

 L       5 ........
  i      4 ........
   n     3 ........
    e    2 ........
     s:  1 ........
         0 ........
Spaces:    01234567



```

Coming from a coordinate-plane background, we can now define draw functions like this:

```javascript
function f(x, y) {
   return ( x == y );
}
```

