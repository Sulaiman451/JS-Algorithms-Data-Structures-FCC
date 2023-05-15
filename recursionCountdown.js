function countdown(n) {
  // Return an empty array if n < 1
  if (n < 1) {
    return [];
    /* Otherwise, create an array and recurse within that array, call the function with (n - 1) until
    n < 1, and then the function will "stack" all those within the array that is returned */
  } else {
    let arr = countdown(n - 1);
    // Push each value within the array to the front
    arr.unshift(n);
    return arr;
  }
}

/*
// Only change code below this line
function countdown(n){
  return;
}
// Only change code above this line
*/
