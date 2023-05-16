// Destructure this object as it is passed to the half function
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

// Destructuring max and min out of stats
// => const { max, min } = stats;
/* Since the original half function takes in stats
as an argument, we can destructure in the parameter.
We can take the destructuring syntax, and just pass
it in the parameter. This pulls out max and min
out of stats which is passed in the half function.
Thus means that we can now just call max and min
instead of stats.max and stats.min*/
const half = ({ max, min }) => (max + min) / 2;

/* Original Problem
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line

// Function takes in stats object, accesses two of its properties, and returns an equation of those properties 
const half = (stats) => (stats.max + stats.min) / 2.0; 

// Only change code above this line
*/
