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
* There's also a bit of "level" text. Let's give the `player` a `level` property and set it to 1. First level!
* We'll start on the methods in a second, but there is one more property on both objects that we can see in use in `main.js`: `isAlive`. Setting it to `true` is going to start a chain reaction of code we need to write, but let's do it!


### A Note On Trailing Commas

It used to be that we'd leave off commas after our object properties or array elements when adding new ones to the end. . At this point, every browser and JavaScript environment should support "trailing commas", i.e., a comma at the end of our last item. So after you add any property or method or element, put a comma afterwards, even if it's the last property. You'll save yourself errors and aggravation later!


### Next Step: "player.fight is not a function"

That's what you should see when you look at your console now. Whoops! But also: thanks, console! Now we know our next step!

Let's add a `fight` method to `player`, remembering that a method is just an object property whose value is a function instead of a string or array or object or number or boolean or what have you. Look up the syntax if you need a refresher! Like most things, it's not a ton of code once you have the syntax down, and you should never feel ashamed to have to look it up again.

So what does `fight` do?

The first thing it does is lower the `hitPoints` property. Let's start out with something relatively simple, where we're lowering the hit points by a random number 1-5.

Don't forget to use your `this`! You'll always need `this` to change any of the _internal_ elements in your object; `hitPoints` by itself would be a variable in scope, and `player.hitPoints` can lead to all kinds of issues if you have multiple `player` objects (which you will definitely have later in your coding career!). But `this` in most contexts means "this particular object that the method is on", and that use case is extremely common, so you'll be using `this` a _lot_.

So! Now `main.js` can use our changing `player.hitPoints` give the user a readout of how many hit points are left, changes the health bar's width, and even . But before we even get to damaging the monster, let's fix those "0 damage" messages below the health bars.


### Next Step: `lastDamageTaken`

The `updateDamage` DOM manipulation function in `main.js` uses `player.lastDamageTaken` and `monster.lastDamageTaken` to give the user a message about what just happened. You should have done this above, but if not, it's time to give both `player` and `monster` a `lastDamageTaken` property and set it to `0` to begin with (since they haven't taken any damage yet!). We'll worry about _doing_ the damage to the `monster` soon enough, but let's deal with the `player` first.

In our `fight` method, we're decrementing `hitPoints` by a random number. But instead of subtracting that random number directly, let's save it in `lastDamageTaken` first, then decrement `hitPoints` by that variable. That way, our object will have the last damage done stored, and we can access it in `main.js` to update the user on what just happened. `main.js` will even update the language used based on how high the number is. Cool!


### Game Not Over

The game doesn't currently end if you run out of hit points, so let's add that logic to our `fight` method. If you set this step up right, when the player runs out of hit points, our `main.js` will update the UI to reflect that the game is over.

Make it so!


### Your Own Worst Enemy

The `player` really should not be deciding what damage is done to him. If we put this logic in the enemy instead, then `monster` or any other enemy we want to introduce can tell our `player` object how much damage is incoming, and that can change depending on which enemy he's facing. For now we've only got one enemy, but it's both a good step to take for moving forward and a good separation of logic between "what this object should decide" and "what other objects should decide".

Let's give the `monster` object a `calculateRawDamage` method. This will be very similar to the way damage is being calculated now, but it'll be a lot more flexible. `calculateRawDamage` should _`return`_ the random value 1-5. Let's also give the enemy a bit of a bonus to his attack: add `2` to the random number before you return it.

Now, in `main.js` you may notice that `player.fight` is invoked with `monster` passed in as an argument. So let's take that parameter in as `enemy` (so as to generalize and also avoid confusion). Now we have access to `enemy.calculateRawDamage`, which should return our raw damage. In fact, let's save that return value as `rawDamage`, so we can _adjust_ that damage.

We have our `level` parameter, and eventually we'll be incrementing that. To make it _mean_ something that the player gets to the next level, let's subtract `level` from our `rawDamage` before we put it in `lastDamageTaken`. THe higher level they have, the more "armor" they'll have to defend themselves. Games!


### Let's Do Some Damage

Let's do the inverse of the last step: give the enemy the damage _we_ do, so they can calculate how much damage should be done to them. Let's make a `calculateRawDamage` function on `player` that returns a raw damage the player does (we recommend another random 1-5 number). Now take that number and pass it into a method we'll write on `monster` called `takeDamage` (remembering that we have access to `monster` as `enemy` via the parameter!).

So what does `monster.takeDamage` do? It takes in some damage from the player, and then uses the same logic as the player damage taking in `fight`. Make sure you're updating all of the enemy's properties just like you would your player!


### More Console Errors For More Methods We Should Write

If you fight enough that the monster dies, and you're paying attention to the conosle, you'll see that "monster.respawn is not a function". Let's make it one. How do we reset the monster object so that it's ready for battle again?

Once we have that done and get a different error (or if you pay attention to what's happening in `main.js`!), you'll see that we need a `player.levelUp` as well. And from the text we get from killing the monster, we can see that we're supposed to level up and get a "slight heal". So let's make that `levelUp` method, bump up `level` by one, and give the player a few more hit points. Say, 5? (A lot of game design goes into decisions like this. Feel free to play with it!)


### Anything That Doesn't Kill Me

Let's also have levelling up make the player deal more damage. When we calculate our attack damage to pass to the enemy, let's make it depend on a `baseAttackDamage` property we can then increment in `levelUp`. (Also, feel free to take this opportunity to clean up your code and move that calculation into a new place: the `player`'s own `calculateRawDdamage` method.) Start `baseAttackDamage` at 5, but then in `levelUp`, increment it by 20%, rounding down to avoid ugly, messy floating point numbers. Now we're cooking with gas! Boy howdy!


### Healing Swords

Right now, because the `level` is increasing and causing us to take less damage, it's possible for the player to take `0` damage, which is just awkward (what is the monster fighting with and why is his aim so bad with it?), or, worse yet, take negative damage, which will, the way we have it set up, actually _heal_  the player.

Let's make sure that every time the player or monster takes damage, they take a minimum of 1 damage. You can use an `if` statement for this, but it's more fun to use `Math.min`, which is also generally a really useful function as is its sister function of `Math.max`. Check them out!