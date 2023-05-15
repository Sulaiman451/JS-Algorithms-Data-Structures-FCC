function rangeOfNumbers(startNum, endNum) {
  /* Condition: starting number is always less than or equal to ending number
  If the condition is not satisfied, return an empty array*/
  if (endNum < startNum) {
    return [];
    // If condition is satisfied, return array of integers
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

/*
function rangeOfNumbers(startNum, endNum) {
  return [];
};
*/
