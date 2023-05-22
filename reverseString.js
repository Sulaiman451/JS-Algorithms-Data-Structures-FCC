/* What this problem boils down to is the following:
1. Turn the string into an array
2. Reverse it
3. Turn the reversed array back into a string to be returned
This is because reverse is an array method, meaning that
simply retunring "str.reverse()" will not work as you will
be thrown an error saying it is not a function
*/

function reverseString(str) {
  /* split() splits a string into an array of substrings reverse() 
  reverses the order of elements in an array join() returns an array 
  as a string. An empty string is in split() because if an empty string 
  is used as the separator, the string is split between each character. 
  This is necessary for reordering a string. If an empty string is not 
  passed through join(), you will get a reversed string, but each character 
  will be separated by commas which is incorrect (since commas are the default 
  separators for this method - passing an empty string removes this because it 
  makes empty space the separator instead). */
  return str.split("").reverse().join("");
}

reverseString("hello");

/* Original Problem
function reverseString(str) {
  return str;
}

reverseString("hello");
*/
