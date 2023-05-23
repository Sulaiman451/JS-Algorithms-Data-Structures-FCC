function largestOfFour(arr) {
  // Empty array to be returned as array of largest numbers
  const results = [];
  // Iterate through each sub-array
  for (let i = 0; i < arr.length; i++) {
    // Initialise largest number as first entry of each sub-array
    let largestNumber = arr[i][0];
    // Iterate through each sub-array's entries
    for (let j = 0; j < arr[i].length; j++) {
      // Reassign value of largest number if previous value is exceeded
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    // Add the largest number of a sub-array to the results array at respective index
    results[i] = largestNumber;
  }
  // Return array of largest numbers after all sub-arrays have been iterated through
  return results;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

/* Original Problem
function largestOfFour(arr) {
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
*/
