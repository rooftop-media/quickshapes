# 📐 Shapes

A library to draw shapes in the text terminal.  


<br /><br /><br /><br />
<br /><br /><br /><br />

A nested `for`-loop can draw a shape in a square. 

The outer loop traverses _lines_ of the shape.  Each line ends with `\n`.

For each line loop in the outer loop, there's an inner loop, which draws each _space_ in a line.

And so, a nested-for loop is really good at drawing coordinates in the [fourth quardant](https://en.wikipedia.org/wiki/Quadrant_(plane_geometry)) of a graph. 
Instead of a _Y-axis_ that counts (0, -1, -2, ...)  and an _X-axis_ counting (0, 1, 2, ...),  
we get a lines-axis that _draws_ downward, but _counts_ upward (0, 1, 2, ...).  
The _X-axis_ remains the same, though we can call it the _space-axis_. 

It looks like this:

```
            Spaces:
           01234567
 L       0 ........
  i      1 ........
   n     2 ........
    e    3 ........
     s:  4 ........
         5 ........


```

Coming from a coordinate-plane background, we can now define draw functions like this:

```javascript
function f(x) = 
```

