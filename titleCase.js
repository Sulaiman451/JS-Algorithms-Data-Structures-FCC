function titleCase(str) {
  // Create array of words (each letter in lower case)
  let words = str.toLowerCase().split(" ");
  // Initialise empty array to receive outputs
  let newArr = [];
  /* Iterate through each word and push each word to newArr 
  after changing each word's first letter to upper case and 
  add remainder of each word's letters that stay in lower 
  case */
  for (let word of words) {
    newArr.push(word[0].toUpperCase() + word.slice(1));
  }
  // Return newArr as string
  return newArr.join(" ");
}

titleCase("I'm a little tea pot");

/* Original Problem
function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");
*/
