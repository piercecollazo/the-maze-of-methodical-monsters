# The Maze of Methodical Monsters

### Introduction

This project is a game-making project, but don't worry about your graphical monster-drawing skills. Don't worry about mine, either! Because they're _solid_.


### FIrst Step: Check Out Our Codebase

We've left the DOM manipulation _in_ this time, so you shouldn't have to worry about that. But you should still read the absolute _heck_ out of `main.js` for the following reasons:

1. It's always good to know what's happening in other parts of the codebase you're working in.
2. It's hopefully readable and might just teach you something!
3. Most importantly, it's got a sort of blueprint by implication of what you'll need in your `player` and `monster` objects. See that `player.isAlive` property? We'll need to make that! And everything else used in `main.js`'s DOM manipulation code..


### Where We'll Be Writing Our Code

`player.js` and `monster.js`.  That's it!

Unless you want to add a `boss.js`. But that's a story for another time/stretch goal.


### Where Should We Start?

Well, if you run this app, you'll get a ton of `undefined`s printed to the screen. That can't be right! Let's set some object properties so we have some starting values for all that DOM manipulation.


### Object Properties

* Let's tackle the green and red "health bars" first. If you check `index.html`, you'll see that they start with values of `100` and `30` hard-coded in.

    But in `main.js`, we're replacing them with the values in `player.hitPoints` and `monster.hitPoints`. So let's, for now, set the `player` and `monster` objects' `hitPoints` properties to equal those starting values. They're not changing yet, but... we'll get there!

* Similarly, the "barely scratched" text appears to come from... well, check it out in `main.js`. Let's make those properties on `monster` and `player` and set them to... whatever you think it should be set to when nothing has actually happened yet.
* We'll start on the methods in a second, but there is one more property on both objects that we can see in use in `main.js`: `isAlive`. Setting it to `true` is going to start a chain reaction of code we need to write, but let's do it!


### A Note On Trailing Commas

It used to be that we'd leave off commas after our object properties or array elements when adding new ones to the end. . At this point, every browser and JavaScript environment should support "trailing commas", i.e., a comma at the end of our last item. So after you add any property or method or element, put a comma afterwards, even if it's the last property. You'll save yourself errors and aggravation later!


### Next Step: "player.fight is not a function"

That's what you should see when you look at your console now. Whoops! But also: thanks, console! Now we know our next step!

Let's add a `fight` method to `player`, remembering that a method is just an object property whose value is a function instead of a string or array or object or number or boolean or what have you. Look up the syntax if you need a refresher! Like most things, it's not a ton of code once you have the syntax down, and you should never feel ashamed to have to look it up again.

So what does `fight` do?

The first thing it does is lower the `hitPoints` property. Let's start out with something relatively simple, where we're lowering the hit points by a random number 1-5.

Don't forget to use your `this`! You'll always need `this` to change any of the _internal_ elements in your object; `hitPoints` by itself would be a variable in scope, and `player.hitPoints` can lead to all kinds of issues if you have multiple `player` objects (which you will definitely have later in your coding career!). But `this` in most contexts means "this particular object that the method is on", and that use case is extremely common, so you'll be using `this` a _lot_.

So! Now `main.js` can use our changing `player.hitPoints` give the user a readout of how many hit points are left and even change the health bar's width. But before we even get to damaging the monster, let's fix those "0 damage" messages below the health bars.