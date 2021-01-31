<!--  title  -->
<h3 align="center" id="title">
  🗺 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 📐 &nbsp; &nbsp; &nbsp; &nbsp; 
  <a href="https://github.com/rooftop-media/shapes#blueprint">QuickShapes Blueprint</a> 
  &nbsp; &nbsp; &nbsp; &nbsp; 📐 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 🗺
</h3>

<br /><br />

<!--  Subtitle -->
<h4 align="center">
  <!-- Adding extra white space to fill the empty left-hand side... -->
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
   &nbsp; &nbsp; - &nbsp; &nbsp; - &nbsp; &nbsp; ☟ 0. Intro  ☟ &nbsp; &nbsp; - &nbsp; &nbsp; - &nbsp; &nbsp; 
  <a href="https://github.com/rooftop-media/shapes/blob/main/blueprint/0_1_Outline.md#title">0.1. QuickShapes Outline</a> &nbsp; &nbsp; ☞
</h4>


<br /><br /><br /><br />
<br /><br /><br /><br />

### About the 🗺 Blueprint

- The Blueprint is a step-by-step tutorial on how to remake QuickShapes.

  The Blueprint also introduces some [KitchenWare](https://github.com/rooftop-media/kw) software development patterns. 
  
  
  
<br /><br /><br /><br />
<br /><br /><br /><br />

###  Background & Motivation.

> *You find yourself **itching to code** some software...*
>
> *It'd be nice to code something **other programmers** might use.* 

<br />

> *And so, you decide to make a quick NodeJS tool.*
> 
> *You'll develop & maintain it on Github,*
> *and publish it to [npm](https://www.npmjs.com/) so it's easy to find.*
>
> *A very solid plan so far -- now you just need an idea to code!*

<br />

> *Ideally, you'd like to code something **flashy**, but kinda **simple** --*  
> *you admit, you're still a **novice** programmer.*  
>
> *You remember a coding exercise you did once,*  
> *about drawing **shapes** to the **terminal screen**.*
>
> *You remember drawing **squares** and **triangles** to be particularly easy,*   
> *and you remember making the shapes optionally **hollow**, too.*




<br /><br /><br /><br />


###  Initial Outline.

> *Eventually you'll want more than squares and triangles,*  
> *but those 2 shapes seems like a good starting point for version 1.0.*
>
> *You write down some simple examples you can imagine...*

<br/><br/>


###  Example Use:

```javascript

draw_square( 4, "* ", true);

/*** Resulting output:
A `filled square`, of size `4`, made of `* `:

* * * * 
* * * * 
* * * * 
* * * * 

*/

```

```javascript

draw_square( 5, "* ", false);

/*** Resulting output:
A `hollow square`, of size `5`, made of `$ `:

$ $ $ $ $ 
$       $ 
$       $ 
$       $ 
$ $ $ $ $ 

*/

```

```javascript

draw_triangle( 4, "# ", false);

/*** Resulting output:
A `solid triangle`, of side length `4`, made of `# `.

# 
# # 
# # #
# # # # 

*/

```

```javascript

draw_triangle( 6, "@ ", false);

/*** Resulting output:
A `hollow triangle`, of side length `6`, made of `@ `.

@ 
@ @
@   @
@     @
@       @
@ @ @ @ @ @

*/

```

<br/><br/>


> *Sure, those would be very doable! A good starting place.*

> *And so you decide to give it a shot --*  
> *you'll write a [NodeJS](https://nodejs.org/) package, of **tools** to draw **customizable shapes**.*

> *You want it to be a **quick** project, and it's about **shapes**.  
> So, you call it **QuickShapes**.*



<br/><br/><br/><br/>



> *You open your favorite document editor and start a new file:*

###  Todo List  ( QuickShape v 1.0. )

 - [ ] 1. Explain the idea, plan features.
 
 - [ ] 2. Coding those features.
 
 - [ ] 3. Build a test.
 
 - [ ] 4. Document, package, & publish.
 
 - [ ] 5. Any revisions
   



<br /><br /><br /><br />

> *After a moment of consideration, you decide you're ready to [start step 1](https://github.com/rooftop-media/shapes/blob/main/blueprint/0_1_TheIdea.md#title).* 

<br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br />


**** *DISCLAIMER about the tutorial step numbering:* ****  

The steps in the Blueprint are organized by *software version number*.
That might be misleading, and here's why: 

Each "major" QuickShape version is independently stable -- 
but each step *between* versions doesn't necessarily result 
in a stable, usable version of the software. 

If you're managing [software version history](https://en.wikipedia.org/wiki/Software_versioning)
for a peice of public software, all version updates -- both major and minor --
should be stable.  That's how version history usually work. 

The type of "in-development" versioning used in here, in the Blueprint,
could be called [internal project versioning](https://en.wikipedia.org/wiki/Software_versioning#Internal_version_numbers).

