function translatePigLatin(str) {
  let vowel = str.match(/[aeiou]/);
  // Find first vowel and where it is in string
  let firstI = str.indexOf(vowel);

  if (firstI > 0) {
    /* Take first consonant or consonant cluster, move
    it to the end of the word, and add ay to it 
    E.g., "california" returns "aliforniacay",
    "glove" returns "oveglay" */
    str = str.slice(firstI) + str.slice(0, firstI) + "ay";
    // Add ay to the end if there are no vowels
  } else if (vowel === null) {
    str = str + "ay";
    // If the word begins with a vowel, add way
  } else {
    str = str + "way";
  }

  return str;
}

translatePigLatin("consonant");

/*
function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");
*/
