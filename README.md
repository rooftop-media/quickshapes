# 📐 Shapes

A library to draw shapes in the text terminal.  

Info:
 - How to use *(coming soon)*
 - Tutorial *(coming soon)*

Docs:
 - Drawing [squares and triangles](#simple-shapes).
 - Setting up a [coordinate system](#coordinates), drawing lines.
 - Drawing ellipses. 

<br /><br /><br /><br />
<br /><br /><br /><br />




<h2 id="simple-shapes">Drawing squares and triangles

<br /><br /><br /><br />
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

