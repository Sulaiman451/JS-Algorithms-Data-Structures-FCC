function sumFibs(num) {
  // Initialise all values as 1
  let prev = 1;
  let curr = 1;
  let sum = 1;

  while (curr <= num) {
    // Only odd numbers have a remainder
    if (curr % 2 === 1) {
      // Update sum with current number
      sum += curr;
    }
    let temp = curr;
    curr += prev;
    prev = temp;
  }

  return sum;
}

sumFibs(4);

/* Original Problem
function sumFibs(num) {
  return num;
}

sumFibs(4);
*/
