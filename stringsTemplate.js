/* Goal: make the function take in the array from 
the failure property of the results object, then
plug in the three values in the array into a string
that is in the syntax of a HTML element where each
value is stored in li tags. Then push the string
a new array and return the array */

// Results object, three properties valued as arrays
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};

// Function takes in an array and returns some array
function makeList(arr) {
  const failureItems = [];
  // Get one value from array at a time
  for (let i = 0; i < arr.length; i++) {
    // Plug iterated value into string
    let str = `<li class="text-warning">${arr[i]}</li>`;
    // Push the string into the failureItems array
    failureItems.push(str);
  }

  return failureItems;
}

// Function call with data being passed, storing what the function returns
const failuresList = makeList(result.failure);

/* Original Problem
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
*/
