function multiplyAll(arr) {
  let product = 1;
  // Check the length of arr
  for (let i = 0; i < arr.length; i++) {
    // Check the length of arr[i]
    for (let j = 0; j < arr[i].length; j++) {
      /*
      Multiply product by itself since it is assigned
      to the value 1, and then multiply it by its
      sub-arrays.
      */

      //  Same as product = product * arr[i][j]
      product *= arr[i][j];
    }
  }
  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

/* Original Problem
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line

  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
*/
