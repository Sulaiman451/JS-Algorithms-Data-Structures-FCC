function findLongestWordLength(str) {
  // Create new array for each word
  let strArr = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < strArr.length; i++) {
    /* This goes through each word in the provided string and 
    keeps updating the value of longestWord until all entries have 
    been covered. */
    if (strArr[i].length >= longestWord.length) {
      longestWord = strArr[i];
    }
  }
  // Return the length of the longest word as a number
  return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

/* Original Problem
function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
*/
