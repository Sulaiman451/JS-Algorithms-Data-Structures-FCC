/* A filtered version of the passed array i.e., one where any array nested within arr 
containg elem has been removed is returned. This is because a passed array containing 
the element will not fulfil the condition set out by the if statement, meaning that it 
will not be pushed onto newArr. The console will return an empty array if a passed 
array contains the element because newArr is an empty array to begin with. An empty 
array with nothing pushed to it returns an empty array. */

function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // If the element is not in a passed array
    if (arr[i].indexOf(elem) == -1) {
      // Insert the element of the array in new filtered array
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);

/* Original Problem
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line

  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
*/
