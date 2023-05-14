## Context

In Blackjack, a player can see whether they have an advantage on the next hand over the house by Card Counting (keeping track of the relative number of high and low cards remaining in the deck).

Having more high cards remaining in the deck favours the player. Each card is assigned a value according to the table below. The player should bet high when the count is positive, and low whent he count is 0 or negative.

| Count Change |       Cards        |
| :----------: | :----------------: |
|     + 1      |     2,3,4,5,6      |
|      0       |       7,8,9        |
|      -1      | 10,'J','Q','K','A' |

## The Task

Write a card counting function receiving a card parameter, which can be a number or a string, and increment or decrement the global ciount variable according to the card's value. The function will return a string with the current count and the string Bet if the count is positive, or Hold if it is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Refer to countingCards.js to see my solution and notes. A very common error in this challenge is not separating the current count and the player's decision with a single space. If this is not done, FCC's terminal will throw an error when you submit your attempt.
