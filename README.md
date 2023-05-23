## The Task

Return an array composed of the largest number from each sub-array from the provided array. You can iterate through an array witha a simple for loop, and access each entry with array syntax arr[i]. Refer to largestNumber.js to see my solution, comments, and the original problem.

\*Note: solution 1 of what is provided in freeCodeCamp's "Get a Hint" section initialises j at 1. While that solution yields a pass through the integrated terminal, I believe it is technically incorrect. I logged arr[i][j] to the console with j initialised at 0 and j initialised at 1. Initialising j at 1 does not return the first entry of each sub-array because JavaScript notation is 0-indexed. The entire point of the algorithm is to iterate through all entries, which does not happen if j is initialised at 1.\*
