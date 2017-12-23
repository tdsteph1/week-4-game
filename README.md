# week-4-game
Watch the demo.
The player will have to guess the answer, just like in Hangman. This time, though, the player will guess with numbers instead of letters. 
Here's how the app works:



There will be four crystals displayed as buttons on the page.
The player will be shown a random number at the start of the game.

When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 


Your game will hide this amount until the player clicks a crystal.
When they do click one, update the player's score counter.


The player wins if their total score matches the random number from the beginning of the game.
The player loses if their score goes above the random number.

The game restarts whenever the player wins or loses.


When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.



Option 1 Game design notes


The random number shown at the start of the game should be between 19 - 120.
Each crystal should have a random hidden value between 1 - 12.

## Crystal Game
![img1](https://github.com/tdsteph1/week-4-game/blob/master/assets/images/img1.png)

## Winning Increment
![img2](https://github.com/tdsteph1/week-4-game/blob/master/assets/images/img2.png)
As you can see in this picture the user has 4 crystals where each image stores a Random value inside a data-attribute using jquery. The user must click on each crystal wisely and remember the value of each crystal image in order to reach the value 106. If the user goes over the given value then the ***Total/lose*** will increment to one but if the user is able to render the ***Total Score*** equivalent to ***Random Number*** then ***Total/win*** will increment to one indicating that the user has won. Lastly ***Random Nudmber*** uses random number generator defined in the math class to generate a new random number for the user to try to reach. ***win*** and ***loses*** reset.
