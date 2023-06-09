function sumAll(arr) {
  // Highest and lowest
  /* Spread operator is used as math.min returns NaN 
  if an array is passed - the spread operator expands 
  the array into its elements*/
  const lowestNum = Math.min(...arr);
  const highestNum = Math.max(...arr);
  let sum = 0;
  // Loop over input and add all numbers in range
  for (let i = lowestNum; i <= highestNum; i++) sum += i;
  {
    return sum;
  }
}

sumAll([1, 4]);

/*
function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);
*/
